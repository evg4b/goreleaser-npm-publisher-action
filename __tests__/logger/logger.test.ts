import { describe, expect, it, jest } from '@jest/globals';
import type { Logger } from 'goreleaser-npm-publisher';

let setLogger: Logger | undefined = undefined;
jest.unstable_mockModule('goreleaser-npm-publisher', () => ({
  setLogger: (newLogger: Logger) => (setLogger = newLogger),
}));

const { logger } = await import('../../src/logger/index');
const { GithubActionLogger } =
  await import('../../src/logger/github-action-logger');
describe('logger', () => {
  it('should export logger', () => {
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(GithubActionLogger);
  });

  it('should export set logger', () => {
    expect(setLogger).toEqual(logger);
  });
});
