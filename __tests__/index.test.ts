import { jest } from '@jest/globals';
import type { run } from '../src/main.js';

const runMock = jest
  .fn<typeof run>()
  .mockName('main.run')
  .mockResolvedValueOnce(undefined);

const setFailedMock = jest.fn().mockName('@actions/core.setFailed');

jest.unstable_mockModule('../src/main.js', () => ({ run: runMock }));
jest.unstable_mockModule('@actions/core', () => ({ setFailed: setFailedMock }));

describe('index', () => {
  beforeEach(() => {
    jest.resetModules();
    runMock.mockReset();
    setFailedMock.mockReset();
  });

  it('calls run when imported', async () => {
    await jest.isolateModulesAsync(async () => {
      runMock.mockResolvedValueOnce(void 0);

      await import('../src/index.js');

      expect(runMock).toHaveBeenCalled();
      expect(setFailedMock).not.toHaveBeenCalled();
    });
  });
});
