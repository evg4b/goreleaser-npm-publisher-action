// @actions/core is ESM-only, so Jest's CommonJS runtime loads this mock instead
// (see "moduleNameMapper" in package.json).
import { jest } from '@jest/globals';
import type * as core from '@actions/core';

export const debug = jest.fn<typeof core.debug>();
export const error = jest.fn<typeof core.error>();
export const getBooleanInput = jest.fn<typeof core.getBooleanInput>();
export const getInput = jest.fn<typeof core.getInput>();
export const group = jest.fn<typeof core.group>();
export const info = jest.fn<typeof core.info>();
export const setFailed = jest.fn<typeof core.setFailed>();
export const warning = jest.fn<typeof core.warning>();
