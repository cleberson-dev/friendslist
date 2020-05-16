const numberExp = /^\+55\s\d{2}\s9\d{4}-\d{4}$/;

export const isValidNumber = (number) => numberExp.test(number);