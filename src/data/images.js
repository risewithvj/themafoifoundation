import manifest from './images.json';

// Resolve a list of folder keys into a de-duplicated, ordered list of image paths.
export function imagesForFolders(folders = []) {
  const seen = new Set();
  const out = [];
  for (const f of folders) {
    for (const src of manifest[f] || []) {
      if (!seen.has(src)) {
        seen.add(src);
        out.push(src);
      }
    }
  }
  return out;
}

// A small, deterministic pool of general/context photos for pages that need extra imagery.
export function generalImages() {
  return manifest['general'] || [];
}

export function allImages() {
  return manifest;
}

// Descriptive alt text (never a filename) for a program gallery/hero image.
export function altFor(title, index = 0) {
  const kinds = [
    `Participants during the ${title}`,
    `A training session from the ${title}`,
    `Hands-on learning at the ${title}`,
    `Beneficiaries of the ${title}`,
    `Facilities and equipment used in the ${title}`,
    `A moment from the ${title}`,
  ];
  return kinds[index % kinds.length];
}
