'use strict';

const _ = require('lodash');
const readdirDeep = require('@rainder/readdir-deep');
const path = require('path');
const co = require('co');
const chalk = require('chalk');
const Benchmark = require('./lib/benchmark');
const microtime = require('microtime');

const specsPath = path.resolve(__dirname, 'specs');

co(function *() {

  const tests = yield readdirDeep
    .read(specsPath)
    .then(mapSpecFiles);

  const maxFileName = tests.reduce((result, a) => Math.max(a.name.length, result), 0);

  for (let test of tests) {
    try {
      const benchmark = new Benchmark(test.module.a, test.module.b, test.module.options);
      const result = yield benchmark.test();
      const [a, b] = result.results;

      const fasterString = a < b
        ? `${_.get(test, 'module.names.a', 'a')} is ${(b / a).toFixed(2)} times faster`
        : `${_.get(test, 'module.names.b', 'b')} is ${(a / b).toFixed(2)} times faster`;

      console.log([
        chalk.blue(padRight(test.name, maxFileName)),
        chalk.red(fasterString),
        `took: ${Math.round(result.took / 1000)}ms.`
      ].join(' '));

    } catch (e) {
      console.error(test.path);
      console.error(e.stack);
    }
  }

}).catch(e => console.error(e));

/**
 *
 * @param items
 * @returns {Array|*}
 */
function mapSpecFiles(items) {
  return items.map((item) => ({
    name: item.replace(specsPath, '').substr(1),
    module: require(item)
  }));
}

/**
 *
 * @param str
 * @param len
 * @returns {*}
 */
function padRight(str, len) {
  while (str.length < len) {
    str += ' ';
  }

  return str;
}
