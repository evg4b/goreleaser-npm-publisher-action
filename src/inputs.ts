import { getBooleanInput, getInput } from '@actions/core';
import { fmt } from './helpres';
import { logger } from './logger';

const undefinedIfEmpty = (value: string | undefined): string | undefined => {
  return value && value?.length > 0 ? value : undefined;
};

export const string = (
  name: string,
  defaultValue?: string,
): string | undefined => {
  const raw = getInput(name, { trimWhitespace: true });
  const value = undefinedIfEmpty(raw) ?? defaultValue;

  logger.debug(fmt`Loading ${name}: ${value}`);

  return value;
};

export const boolean = (name: string): boolean => {
  const value = getBooleanInput(name);

  logger.debug(fmt`Loading ${name}: ${value}`);

  return value;
};

export const stringArray = (
  name: string,
  defaultValue?: string[],
): string[] => {
  const raw = getInput(name, { trimWhitespace: true })
    ?.split(/[\r\n]/)
    ?.map(item => item.trim());

  const value = (raw ?? defaultValue ?? []).filter(undefinedIfEmpty);

  logger.debug(fmt`Loading ${name}: ${value} (${value.length} lines)`);

  return value;
};
