import { kebabCaseToCamelCase } from '../../../src';

test('test 1', () => {
  expect(kebabCaseToCamelCase('set-user-name')).toBe('setUserName');
});

test('test 2', () => {
  expect(kebabCaseToCamelCase('user')).toBe('user');
});

test('test 3', () => {
  expect(kebabCaseToCamelCase('-user')).toBe('User');
});

test('test 4', () => {
  expect(kebabCaseToCamelCase(' set-user-name ')).toBe('setUserName');
});

test('test 5', () => {
  expect(kebabCaseToCamelCase(' SeT-UsEr-NaMe ')).toBe('setUserName');
});

test('test 6', () => {
  expect(kebabCaseToCamelCase('--name')).toBe('-Name');
});
