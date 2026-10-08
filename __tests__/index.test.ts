import { describe, expect, it, jest } from '@jest/globals';
import * as core from '../__fixtures__/core';

const run = jest.fn<() => Promise<void>>();

// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core);
jest.unstable_mockModule('../src/main', () => ({ run }));

describe('index', () => {
  it('calls run when imported', async () => {
    run.mockResolvedValueOnce(undefined);

    await import('../src/index');

    expect(run).toHaveBeenCalled();
    expect(core.setFailed).not.toHaveBeenCalled();
  });
});
