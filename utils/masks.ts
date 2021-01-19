export const moneyMask = (value: string): string => {
  let newValue = value.concat('');
  newValue = newValue.replace(/[\D]+/g, '');
  newValue += '';
  newValue = newValue.replace(/([0-9]{2})$/g, ',$1');

  if (newValue.length > 6) {
    newValue = newValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  if (newValue.length === 0) return '';
  return 'R$ '.concat(newValue);
};

export const cpfMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};
