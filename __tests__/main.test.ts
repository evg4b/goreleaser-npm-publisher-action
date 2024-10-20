jest.mock('goreleaser-npm-publisher', () => ({
  publish: jest.fn(),
  setLogger: jest.fn(),
}));

jest.mock('../src/inputs', () => ({
  boolean: jest.fn(),
  string: jest.fn(),
  stringArray: jest.fn(),
}));

import { publish } from 'goreleaser-npm-publisher';
import { cwd } from 'node:process';
import { boolean, string, stringArray } from '../src/inputs';
import { run } from '../src/main';

describe('index', () => {
  beforeEach(async () => {
    jest
      .mocked(string)
      .mockReturnValueOnce('project-value')
      .mockReturnValueOnce('builder-value')
      .mockReturnValueOnce('prefix-value')
      .mockReturnValueOnce('description-value')
      .mockReturnValueOnce('token-value');

    jest.mocked(boolean).mockReturnValueOnce(true);

    jest
      .mocked(stringArray)
      .mockReturnValueOnce(['readme.md', 'license', 'authors.txt']);

    await run();
  });

  it('should import project', () => {
    expect(string).toHaveBeenCalledWith('project', cwd());
  });

  it('should import builder', () => {
    expect(string).toHaveBeenCalledWith('builder');
  });

  it('should import clear', () => {
    expect(boolean).toHaveBeenCalledWith('clear');
  });

  it('should import prefix', () => {
    expect(string).toHaveBeenCalledWith('prefix');
  });

  it('should import description', () => {
    expect(string).toHaveBeenCalledWith('description');
  });

  it('should import files', () => {
    expect(stringArray).toHaveBeenCalledWith('files', ['README.md', 'LICENSE']);
  });

  it('should import token', () => {
    expect(string).toHaveBeenCalledWith('token');
  });

  it('should call publish', () => {
    expect(publish).toHaveBeenCalledWith({
      project: 'project-value',
      builder: 'builder-value',
      clear: true,
      prefix: 'prefix-value',
      description: 'description-value',
      files: ['readme.md', 'license', 'authors.txt'],
      token: 'token-value',
    });
  });
});
