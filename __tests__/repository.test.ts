const envMock: Record<string, string | undefined> = {
  GITHUB_SERVER_URL: 'https://github.com',
  GITHUB_REPOSITORY: 'evg4b/goreleaser-npm-publisher-action',
};

jest.mock('node:process', () => ({
  env: envMock,
}));

import { defaultRepository } from '../src/repository';

describe('defaultRepository', () => {
  const cases = [
    {
      name: 'should build the url from the github environment',
      GITHUB_SERVER_URL: 'https://github.com',
      GITHUB_REPOSITORY: 'evg4b/goreleaser-npm-publisher-action',
      expected:
        'git+https://github.com/evg4b/goreleaser-npm-publisher-action.git',
    },
    {
      name: 'should preserve the case of the repository',
      GITHUB_SERVER_URL: 'https://github.com',
      GITHUB_REPOSITORY: 'Flagsmith/flagsmith-CLI',
      expected: 'git+https://github.com/Flagsmith/flagsmith-CLI.git',
    },
    {
      name: 'should support github enterprise servers',
      GITHUB_SERVER_URL: 'https://github.example.com',
      GITHUB_REPOSITORY: 'evg4b/repo',
      expected: 'git+https://github.example.com/evg4b/repo.git',
    },
    {
      name: 'should return undefined without a server url',
      GITHUB_SERVER_URL: undefined,
      GITHUB_REPOSITORY: 'evg4b/repo',
      expected: undefined,
    },
    {
      name: 'should return undefined without a repository',
      GITHUB_SERVER_URL: 'https://github.com',
      GITHUB_REPOSITORY: undefined,
      expected: undefined,
    },
    {
      name: 'should return undefined without a server url and repository',
      GITHUB_SERVER_URL: undefined,
      GITHUB_REPOSITORY: undefined,
      expected: undefined,
    },
  ];

  describe.each(cases)(
    '$name',
    ({ GITHUB_REPOSITORY, GITHUB_SERVER_URL, expected }) => {
      beforeEach(() => {
        if (typeof envMock.GITHUB_SERVER_URL !== 'undefined') {
          envMock.GITHUB_SERVER_URL = GITHUB_SERVER_URL;
        } else {
          delete envMock.GITHUB_SERVER_URL;
        }

        if (typeof envMock.GITHUB_REPOSITORY !== 'undefined') {
          envMock.GITHUB_REPOSITORY = GITHUB_REPOSITORY;
        } else {
          delete envMock.GITHUB_REPOSITORY;
        }
      });

      it(`should return ${expected}`, () => {
        const result = defaultRepository();
        expect(result).toBe(expected);
      });
    },
  );
});
