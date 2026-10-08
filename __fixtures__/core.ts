/**
 * This file is used to mock the `@actions/core` module in tests.
 */
import type * as core from '@actions/core';
import { jest } from '@jest/globals';

export const debug = jest.fn<typeof core.debug>();
export const error = jest.fn<typeof core.error>();
export const info = jest.fn<typeof core.info>();
export const warning = jest.fn<typeof core.warning>();
export const group = jest.fn<typeof core.group>();
export const getInput = jest.fn<typeof core.getInput>();
export const getBooleanInput = jest.fn<typeof core.getBooleanInput>();
export const getMultilineInput = jest.fn<typeof core.getMultilineInput>();
export const setFailed = jest.fn<typeof core.setFailed>();
