#!/usr/bin/env node
/* eslint no-eval: 0 */

import { brainGameStart } from '../src/index.js';
import { str, brainCalc, a } from '../src/games/calc.js';

brainGameStart(a, str, brainCalc);
