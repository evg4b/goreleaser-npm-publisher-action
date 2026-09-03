import { env } from 'node:process';

/**
 * Builds the source repository URL from the GitHub Actions environment.
 *
 * npm requires the published `repository` field to match, case-sensitively,
 * the repository the package is built in, otherwise the registry rejects the
 * provenance attestation. npm derives the attested URI from GITHUB_SERVER_URL
 * and GITHUB_REPOSITORY, so deriving the default from the same variables keeps
 * the two in step without the caller restating it.
 *
 * Returns undefined outside GitHub Actions, leaving `repository` unset.
 */
export const defaultRepository = (): string | undefined => {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY } = env;

  if (!GITHUB_SERVER_URL || !GITHUB_REPOSITORY) {
    return undefined;
  }

  return `git+${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}.git`;
};
