import { type Logger } from 'goreleaser-npm-publisher';

let setLogger: Logger | undefined = undefined;
jest.mock('goreleaser-npm-publisher', () => ({
  setLogger: (newLogger: Logger) => (setLogger = newLogger),
}));

import { logger } from '../../src/logger';
import { GithubActionLogger } from '../../src/logger/github-action-logger';

describe('logger', () => {
  it('should export logger', () => {
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(GithubActionLogger);
  });

  it('should export set logger', () => {
    expect(setLogger).toEqual(logger);
  });
});
