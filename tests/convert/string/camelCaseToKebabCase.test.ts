import { camelCaseToKebabCase } from '../../../src';

test('test 1', () => {
  expect(camelCaseToKebabCase('setUserName')).toBe('set-user-name');
});

test('test 2', () => {
  expect(camelCaseToKebabCase('user')).toBe('user');
});

test('test 3', () => {
  expect(camelCaseToKebabCase('User')).toBe('user');
});

test('test 4', () => {
  expect(camelCaseToKebabCase(' setUserName ')).toBe(' set-user-name ');
});

test('test 5', () => {
  expect(camelCaseToKebabCase('-Name')).toBe('name');
});

test('test 6', () => {
  expect(camelCaseToKebabCase('----Name')).toBe('name');
});

test('test 7', () => {
  expect(camelCaseToKebabCase('Name-')).toBe('name');
});

test('test 8', () => {
  expect(camelCaseToKebabCase('Name----')).toBe('name');
});

test('test 9', () => {
  expect(camelCaseToKebabCase('-Name-')).toBe('name');
});
