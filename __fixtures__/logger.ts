/**
 * This file is used to mock the `src/logger` module in tests.
 */
import { jest } from '@jest/globals';
import type { Logger } from 'goreleaser-npm-publisher';

export const logger = {
  group: jest.fn<Logger['group']>(),
  info: jest.fn<Logger['info']>(),
  warning: jest.fn<Logger['warning']>(),
  error: jest.fn<Logger['error']>(),
  debug: jest.fn<Logger['debug']>(),
};
