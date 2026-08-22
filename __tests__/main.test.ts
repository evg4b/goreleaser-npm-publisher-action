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
      .mockReturnValueOnce('name-value')
      .mockReturnValueOnce('bin-value')
      .mockReturnValueOnce('prefix-value')
      .mockReturnValueOnce('repository-value')
      .mockReturnValueOnce('git')
      .mockReturnValueOnce('repository-directory-value')
      .mockReturnValueOnce('description-value')
      .mockReturnValueOnce('MIT')
      .mockReturnValueOnce('token-value');

    jest.mocked(boolean).mockReturnValueOnce(true).mockReturnValueOnce(false);

    jest
      .mocked(stringArray)
      .mockReturnValueOnce(['readme.md', 'license', 'authors.txt'])
      .mockReturnValueOnce(['cli', 'action', 'github-action']);

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

  it('should import name', () => {
    expect(string).toHaveBeenCalledWith('name');
  });

  it('should import bin', () => {
    expect(string).toHaveBeenCalledWith('bin');
  });

  it('should import prefix', () => {
    expect(string).toHaveBeenCalledWith('prefix');
  });

  it('should import repository', () => {
    expect(string).toHaveBeenCalledWith('repository');
  });

  it('should import repository-type', () => {
    expect(string).toHaveBeenCalledWith('repository-type');
  });

  it('should import repository-directory', () => {
    expect(string).toHaveBeenCalledWith('repository-directory');
  });

  it('should import description', () => {
    expect(string).toHaveBeenCalledWith('description');
  });

  it('should import files', () => {
    expect(stringArray).toHaveBeenCalledWith('files', ['README.md', 'LICENSE']);
  });

  it('should import keywords', () => {
    expect(stringArray).toHaveBeenCalledWith('keywords', []);
  });

  it('should import license', () => {
    expect(string).toHaveBeenCalledWith('license');
  });

  it('should import token', () => {
    expect(string).toHaveBeenCalledWith('token');
  });

  it('should call publish', () => {
    expect(publish).toHaveBeenCalledWith({
      project: 'project-value',
      builder: 'builder-value',
      clear: true,
      name: 'name-value',
      bin: 'bin-value',
      prefix: 'prefix-value',
      repository: 'repository-value',
      repositoryType: 'git',
      repositoryDirectory: 'repository-directory-value',
      description: 'description-value',
      files: ['readme.md', 'license', 'authors.txt'],
      keywords: ['cli', 'action', 'github-action'],
      license: 'MIT',
      token: 'token-value',
    });
  });
});
