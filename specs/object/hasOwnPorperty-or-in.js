'use strict';

module.exports = {

  a: () => {
    const o = { a: true };

    return () => {
      return 'a' in o;
    };
  },

  b: () => {
    const o = { a: true };

    return () => {
      return o.hasOwnProperty('a');
    };
  },

  names: {
    a: 'in',
    b: '.hasOwnProperty',
  },

  options: {
    test_iterations: 1e2,
    function_iterations: 1e4,
  }
};
