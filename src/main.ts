import { publish } from 'goreleaser-npm-publisher';
import { cwd } from 'node:process';
import { boolean, string, stringArray } from './inputs';
import { logger } from './logger';

export async function run(): Promise<void> {
  logger.debug(`Running publishing...`);

  await publish({
    project: string('project', cwd()),
    builder: string('builder'),
    clear: boolean('clear'),
    prefix: string('prefix'),
    description: string('description'),
    files: stringArray('files', ['README.md', 'LICENSE']),
    keywords: stringArray('keywords', []),
    token: string('token'),
    license: string('license'),
  });

  logger.debug('Finished publishing');
}
