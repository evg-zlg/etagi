


export function getPricePerSquare(price: number, area: number): string {
  const pricePerSquare = price / area;
  const formatter = new Intl.NumberFormat("ru");
  
  return formatter.format(pricePerSquare);
}
