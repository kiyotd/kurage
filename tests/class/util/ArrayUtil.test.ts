import { ArrayUtil } from '../../../src';

test('ArrayUtil.sortNumber', () => {
  expect(ArrayUtil.sortNumber([1, 3, 2, 100])).toEqual([1, 2, 3, 100]);
});
