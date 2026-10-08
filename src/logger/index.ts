import { Logger, setLogger } from 'goreleaser-npm-publisher';
import { GithubActionLogger } from './github-action-logger.js';

export const logger: Logger = new GithubActionLogger();

setLogger(logger);
