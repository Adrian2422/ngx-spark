export const mergeClassIntoSvg = (svg: string, className: string): string => {
  return svg.replace('<svg ', `<svg class="${className}" `);
};
