export const formattedNumber = (number: number): string => {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
