import { env } from 'node:process';

export const defaultRepository = (): string | undefined => {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY } = env;

  if (!GITHUB_SERVER_URL || !GITHUB_REPOSITORY) {
    return undefined;
  }

  return `git+${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}.git`;
};
