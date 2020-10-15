#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/index.js';

program
  .version('0.0.1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .description(' Compares two configuration files and shows a difference.')
  .arguments('<filePath1> <filePath2>')
  .action((filePath1, filePath2, cmdObj) => genDiff(filePath1, filePath2, cmdObj.format));

program.parse(process.argv);
