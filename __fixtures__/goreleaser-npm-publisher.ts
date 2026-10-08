/**
 * This file is used to mock the `goreleaser-npm-publisher` module in tests.
 */
import { jest } from '@jest/globals';
import type * as publisher from 'goreleaser-npm-publisher';

export const publish = jest.fn<typeof publisher.publish>();
export const setLogger = jest.fn<typeof publisher.setLogger>();
