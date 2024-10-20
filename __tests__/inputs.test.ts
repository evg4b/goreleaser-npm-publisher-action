jest.mock('@actions/core', () => ({
  getInput: jest.fn(),
  getMultilineInput: jest.fn(),
  getBooleanInput: jest.fn(),
}));

jest.mock('../src/logger', () => ({
  logger: {
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  },
}));

import { getBooleanInput, getInput } from '@actions/core';
import { boolean, string, stringArray } from '../src/inputs';

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
    jest.mocked(getInput).mockReturnValueOnce('test-value');

    const value = string('project');

    expect(value).toEqual('test-value');
    expect(getInput).toHaveBeenCalledWith('project', { trimWhitespace: true });
  });
});

describe('boolean', () => {
  it('should return true', () => {
    jest.mocked(getBooleanInput).mockReturnValueOnce(true);

    const value = boolean('clean');

    expect(value).toEqual(true);
    expect(getBooleanInput).toHaveBeenCalledWith('clean');
  });

  it('should return false', () => {
    jest.mocked(getBooleanInput).mockReturnValueOnce(false);

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
    jest.mocked(getInput).mockReturnValueOnce('license\nreadme.md');

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
