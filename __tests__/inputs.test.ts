import { describe, expect, it, jest } from '@jest/globals';
import * as core from '../__fixtures__/core';
import { logger } from '../__fixtures__/logger';

jest.unstable_mockModule('@actions/core', () => core);
jest.unstable_mockModule('../src/logger/index', () => ({ logger }));

const { boolean, string, stringArray } = await import('../src/inputs');
const { getBooleanInput, getInput } = core;
describe('string', () => {
  it('should return undefined for unknown input', () => {
    const value = string('prefix');

    expect(value).toBeUndefined();
    expect(getInput).toHaveBeenCalledWith('prefix', { trimWhitespace: true });
  });

  it('should return default value', () => {
    const value = string('prefix', 'default-value');

    expect(value).toEqual('default-value');
    expect(getInput).toHaveBeenCalledWith('prefix', { trimWhitespace: true });
  });

  it('should return value', () => {
    getInput.mockReturnValueOnce('test-value');

    const value = string('project');

    expect(value).toEqual('test-value');
    expect(getInput).toHaveBeenCalledWith('project', { trimWhitespace: true });
  });
});

describe('boolean', () => {
  it('should return true', () => {
    getBooleanInput.mockReturnValueOnce(true);

    const value = boolean('clean');

    expect(value).toEqual(true);
    expect(getBooleanInput).toHaveBeenCalledWith('clean');
  });

  it('should return false', () => {
    getBooleanInput.mockReturnValueOnce(false);

    const value = boolean('clean');

    expect(value).toEqual(false);
    expect(getBooleanInput).toHaveBeenCalledWith('clean');
  });
});

describe('stringArray', () => {
  it('should return empty array by default', () => {
    const value = stringArray('files');

    expect(value).toEqual([]);
    expect(getInput).toHaveBeenCalledWith('files', {
      trimWhitespace: true,
    });
  });

  it('should return value', () => {
    getInput.mockReturnValueOnce('license\nreadme.md');

    const value = stringArray('files');

    expect(value).toEqual(['license', 'readme.md']);
    expect(getInput).toHaveBeenCalledWith('files', {
      trimWhitespace: true,
    });
  });

  it('should return default value', () => {
    const value = stringArray('files', ['readme.txt']);

    expect(value).toEqual(['readme.txt']);
    expect(getInput).toHaveBeenCalledWith('files', {
      trimWhitespace: true,
    });
  });
});
