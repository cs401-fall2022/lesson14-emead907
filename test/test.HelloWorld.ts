import {describe, expect, test} from '@jest/globals';
import {hello} from '../HelloWorld';

describe('sum module', () => {
  test('returns the string hello', () => {
    expect(helloWorld()).toBe('Hello World!');
  });
});