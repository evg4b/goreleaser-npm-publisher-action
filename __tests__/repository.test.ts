import { env } from 'node:process';
import { defaultRepository } from '../src/repository';

describe('defaultRepository', () => {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY } = env;

  afterEach(() => {
    env.GITHUB_SERVER_URL = GITHUB_SERVER_URL;
    env.GITHUB_REPOSITORY = GITHUB_REPOSITORY;
  });

  it('should build the url from the github environment', () => {
    env.GITHUB_SERVER_URL = 'https://github.com';
    env.GITHUB_REPOSITORY = 'evg4b/goreleaser-npm-publisher-action';

    expect(defaultRepository()).toEqual(
      'git+https://github.com/evg4b/goreleaser-npm-publisher-action.git',
    );
  });

  it('should preserve the case of the repository', () => {
    env.GITHUB_SERVER_URL = 'https://github.com';
    env.GITHUB_REPOSITORY = 'Flagsmith/flagsmith-CLI';

    expect(defaultRepository()).toEqual(
      'git+https://github.com/Flagsmith/flagsmith-CLI.git',
    );
  });

  it('should support github enterprise servers', () => {
    env.GITHUB_SERVER_URL = 'https://github.example.com';
    env.GITHUB_REPOSITORY = 'evg4b/repo';

    expect(defaultRepository()).toEqual(
      'git+https://github.example.com/evg4b/repo.git',
    );
  });

  it('should return undefined without a server url', () => {
    delete env.GITHUB_SERVER_URL;
    env.GITHUB_REPOSITORY = 'evg4b/repo';

    expect(defaultRepository()).toBeUndefined();
  });

  it('should return undefined without a repository', () => {
    env.GITHUB_SERVER_URL = 'https://github.com';
    delete env.GITHUB_REPOSITORY;

    expect(defaultRepository()).toBeUndefined();
  });
});
