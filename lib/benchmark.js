'use strict';

const _ = require('lodash');
const microtime = require('microtime');
const co = require('co');

module.exports = class Benchmark {
  constructor(a, b, options = {}) {
    this.fns = [a(), b()];
    this.options = _.defaults({}, options, {
      test_iterations: 1e3,
      function_iterations: 1e4
    });

    console.assert(this.fns[0] instanceof Function, 'argument a must return a Function');
    console.assert(this.fns[1] instanceof Function, 'argument b must return a Function');
  }

  /**
   *
   * @returns {*}
   */
  test() {
    return co(this._test());
  }

  /**
   *
   * @returns {Array}
   * @private
   */
  *_test() {
    const results = [];
    const now = microtime.now();

    for (let i = 0; i < this.options.test_iterations; i++) {
      results[results.length] = this.fns.map(fn => this.burnIt(fn, this.options.function_iterations));

      //sleep for garbage collector and v8 optimizer to kick in
      yield cb => setImmediate(cb);
    }

    return {
      took: microtime.now() - now,
      results: results
        .reduce((a, b) => [a[0] + b[0], a[1] + b[1]])
        .map(i => i /= this.options.test_iterations)
    };
  }

  /**
   *
   * @param fn
   * @param COUNT
   * @returns {number}
   */
  burnIt(fn, count) {
    const now = microtime.now();

    for (let i = 0; i < count; i++) {
      fn();
    }

    return microtime.now() - now;
  }
}
