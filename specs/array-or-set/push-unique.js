'use strict';

module.exports = {

  a: () => {
    const o = new Set();
    let i = 0;

    return () => {
      o.add(i++);
    };
  },

  b: () => {
    const o = [];
    let i = 0;

    return () => {
      i++;

      o.indexOf(i) === -1 && o.push(i);
    };
  },

  names: {
    a: 'set',
    b: 'array',
  },

  options: {
    test_iterations: 1e2,
    function_iterations: 1e3,
  }
};
