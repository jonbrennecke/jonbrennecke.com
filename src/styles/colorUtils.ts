import { color } from 'd3-color';

export const opacity = (colorSpecifier: string, opacity: number) => {
  const clr = color(colorSpecifier)!;
  clr.opacity = opacity;
  return clr.toString();
};

export const lighten = (colorSpecifier: string, k: number) => {
  const clr = color(colorSpecifier)!;
  return clr.brighter(k).toString();
};

export const darken = (colorSpecifier: string, k: number) => {
  const clr = color(colorSpecifier)!;
  return clr.darker(k).toString();
};

export const colorToRGBA = (
  colorSpecifier: string,
  alpha: number = 1
): string => {
  const clr = color(colorSpecifier);
  if (!clr) {
    return '';
  }
  clr.opacity = alpha;
  return clr.toString();
};
