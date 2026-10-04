import { fmt } from '../src/helpres';

describe('fmt', () => {
  const testCases = [
    { name: 'plain text', actual: fmt`test`, expected: 'test' },
    { name: 'with number', actual: fmt`Test ${1}`, expected: 'Test 1' },
    { name: 'with string', actual: fmt`Test ${'test'}`, expected: 'Test test' },
    {
      name: 'with object',
      actual: fmt`Test ${{}}`,
      expected: 'Test [object Object]',
    },
    {
      name: 'with array',
      actual: fmt`Test ${[1, 2, 3]}`,
      expected: 'Test 1,2,3',
    },
    {
      name: 'with undefined ',
      actual: fmt`Test ${undefined}`,
      expected: 'Test undefined',
    },
    { name: 'with null', actual: fmt`Test ${null}`, expected: 'Test null' },
  ];

  it.each(testCases)('$name', ({ actual, expected }) => {
    expect(actual).toEqual(expected);
  });
});
