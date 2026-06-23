export const IMAGE_MAP: Record<string, string> = {
  'Test1before.jpg': 'https://i.postimg.cc/prXYCzbg/Test1before.jpg',
  'Test1after.jpg': 'https://i.postimg.cc/dQmx9jdk/Test1after.jpg',
  'Test2before.jpg': 'https://i.postimg.cc/hGdCQLcC/Test2before.jpg',
  'test2bfter.jpg': 'https://i.postimg.cc/JhkTHNMx/test2bfter.jpg',
  'Test3before.jpg': 'https://i.postimg.cc/YSWXL6Mn/Test3before.jpg',
  'Test3after.jpg': 'https://i.postimg.cc/XvC2Bf4k/Test3after.jpg',
  'Flusher Base': 'https://i.postimg.cc/Ty6VbNn1/Flusher-Base.jpg',
  'Anti wank therapy Base': 'https://i.postimg.cc/ftWY232T/Anti-wank-therapy-Base.jpg',
  'Rock Steady Base': 'https://i.postimg.cc/8Fmhmdb4/Rock-Steady-Base.jpg',
  'Volumizer Base': 'https://i.postimg.cc/8FSRvXLP/Volumizer-Base.jpg',
  'Everlast Base1': 'https://i.postimg.cc/34r2SySH/Everlast-Base1.jpg',
  'Extra Hours Base': 'https://i.postimg.cc/sBrYWH5z/Extra-Hours-Base.jpg',
  'Enlargement Therapy Base': 'https://i.postimg.cc/t1j36vFX/Enlargement-Therapy-Base.jpg',
  'EnlargementInfusionBase': 'https://i.postimg.cc/TL2n7y7R/Enlargement-Infusion-Base.jpg',
};

/**
 * Helper to get the correct URL for an image.
 * Falls back to placehold.co if the image is missing from the map.
 */
export function getImageUrl(imageKey: string, fallbackText: string = 'IMAGE'): string {
  // Return the mapped URL if it exists
  if (IMAGE_MAP[imageKey]) {
    return IMAGE_MAP[imageKey];
  }
  
  // Return a generic fallback
  return `https://placehold.co/600x400/eeeeee/999999?text=${encodeURIComponent(fallbackText)}`;
}
