export const convertCurrency = (amt, withCentsPlace) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    ...(!withCentsPlace ? {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    } : {})
  });
  return USDollar.format(amt)
}