import Validator from '../js/validator';

test('Принимает корректное имя', () => {
  expect(Validator.validateUsername('Anya')).toBe('Anya');
  expect(Validator.validateUsername('Аня')).toBe('invalid name');
});

test('Не принимает имя начинающееся с цифр', () => {
  expect(Validator.validateUsername('1Anya')).toBe('Username must begin with a letter');
  expect(Validator.validateUsername('-Anya')).toBe('Username must begin with a letter');
  expect(Validator.validateUsername('_Anya')).toBe('Username must begin with a letter');
});

test('Не принимает имя заканчивающееся цифрой', () => {
  expect(Validator.validateUsername('Anya2')).toBe('Username must end with a letter');
  expect(Validator.validateUsername('Anya-')).toBe('Username must end with a letter');
  expect(Validator.validateUsername('Anya_')).toBe('Username must end with a letter');
});

test('Не принимает 3 цифры подряд', () => {
  expect(Validator.validateUsername('Any222a')).toBe('Username must not contain three numbers in a row');
  expect(Validator.validateUsername('A2n2y2a')).toBe('A2n2y2a');
});
