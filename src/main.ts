import { publish } from 'goreleaser-npm-publisher';
import { cwd } from 'node:process';
import { boolean, string, stringArray } from './inputs';
import { logger } from './logger';
import { defaultRepository } from './repository';

export async function run(): Promise<void> {
  logger.debug(`Running publishing...`);

  await publish({
    project: string('project', cwd()),
    builder: string('builder'),
    clear: boolean('clear'),
    name: string('name'),
    bin: string('bin'),
    prefix: string('prefix'),
    repository: string('repository', defaultRepository()),
    repositoryType: string('repository-type'),
    repositoryDirectory: string('repository-directory'),
    description: string('description'),
    files: stringArray('files', ['README.md', 'LICENSE']),
    keywords: stringArray('keywords', []),
    license: string('license'),
    token: string('token'),
  });

  logger.debug('Finished publishing');
}
