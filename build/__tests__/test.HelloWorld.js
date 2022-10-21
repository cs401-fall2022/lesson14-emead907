import { describe, expect, test } from '@jest/globals';
import { hello } from '../HelloWorld';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(hello()).toBe('Hello World!');
    });
});
//# sourceMappingURL=test.HelloWorld.js.map