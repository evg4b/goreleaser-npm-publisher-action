const groupMock = jest.fn();
const infoMock = jest.fn();
const warningMock = jest.fn();
const errorMock = jest.fn();
const debugMock = jest.fn();

jest.mock('@actions/core', () => ({
  group: groupMock,
  info: infoMock,
  warning: warningMock,
  error: errorMock,
  debug: debugMock,
}));

import { GithubActionLogger } from '../../src/logger/github-action-logger';

describe('GithubActionLogger', () => {
  let logger: GithubActionLogger;

  beforeEach(() => {
    logger = new GithubActionLogger();
  });

  it('group', () => {
    const fn = jest.fn();

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
