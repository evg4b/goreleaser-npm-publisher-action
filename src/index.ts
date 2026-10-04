import { setFailed } from '@actions/core';
import { run } from './main';

run().catch(setFailed);
