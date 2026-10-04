import { jest } from '@jest/globals';

const groupMock = jest.fn();
const infoMock = jest.fn();
const warningMock = jest.fn();
const errorMock = jest.fn();
const debugMock = jest.fn();

jest.unstable_mockModule('@actions/core', () => ({
  group: groupMock,
  info: infoMock,
  warning: warningMock,
  error: errorMock,
  debug: debugMock,
}));

const { GithubActionLogger } =
  await import('../../src/logger/github-action-logger.js');

describe('GithubActionLogger', () => {
  let logger: InstanceType<typeof GithubActionLogger>;

  beforeEach(() => {
    logger = new GithubActionLogger();
  });

  it('group', () => {
    const fn = jest.fn<() => Promise<void>>();

    logger.group('group', fn);

    expect(groupMock).toHaveBeenCalledWith('group', fn);
  });

  it('info', () => {
    logger.info('info');

    expect(infoMock).toHaveBeenCalledWith('info');
  });

  it('warning', () => {
    logger.warning('warning');

    expect(warningMock).toHaveBeenCalledWith('warning');
  });

  it('error', () => {
    logger.error('error');

    expect(errorMock).toHaveBeenCalledWith('error');
  });

  it('debug', () => {
    logger.debug('debug');

    expect(debugMock).toHaveBeenCalledWith('debug');
  });
});
