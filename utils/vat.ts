const includeVat = (price: number) => {
  const result = price * 1.2;
  return result.toFixed(2);
};
export default includeVat;
