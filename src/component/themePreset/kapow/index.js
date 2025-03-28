export const kapow = {
  name: 'Kapow',
  color: { range: { primary: { h: 194, s: 77 } }, contrast: { start: 24, end: 54 } },
  accent: { hsl: { h: 115, s: 100, l: 50 }, rgb: { r: 21, g: 255, b: 0 } },
  font: { display: { name: 'Bangers', weight: 400, style: 'normal' }, ui: { name: 'Sniglet', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/iTabAssets/blob/main/images/1626516786268.jpeg?raw=true', blur: 0, grayscale: 100, scale: 100, accent: 0, opacity: 10, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 40,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 40, blur: 4 },
  opacity: { general: 0 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 1, opacity: 80 } },
  group: { toolbar: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
