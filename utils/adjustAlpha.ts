const adjustAlpha = (colorString: string, alphaPercentage: number) => {
  const color = colorString.slice(1);

  const alpha = Math.round((alphaPercentage * 255) / 100);

  const newColor = color + alpha.toString(16).padStart(2, '0');

  return `#${newColor}`;
};
export default adjustAlpha;
