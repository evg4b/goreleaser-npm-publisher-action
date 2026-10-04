const runMock = jest.fn().mockName('main.run').mockResolvedValueOnce(undefined);

const setFailedMock = jest.fn().mockName('@actions/core.setFailed');

jest.mock('../src/main', () => ({ run: runMock }));
jest.mock('@actions/core', () => ({ setFailed: setFailedMock }));

describe('index', () => {
  beforeEach(() => {
    jest.resetModules();
    runMock.mockReset();
    setFailedMock.mockReset();
  });

  it('calls run when imported', async () => {
    jest.isolateModules(() => {
      runMock.mockResolvedValueOnce(void 0);

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('../src/index');

      expect(runMock).toHaveBeenCalled();
      expect(setFailedMock).not.toHaveBeenCalled();
    });
  });
});
