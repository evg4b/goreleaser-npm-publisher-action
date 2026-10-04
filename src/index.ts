import { setFailed } from '@actions/core';
import { run } from './main.js';

run().catch(setFailed);
