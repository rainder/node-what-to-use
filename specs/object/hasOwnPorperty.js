'use strict';

module.exports = {

  a: () => {
    const o = { a: true };

    return () => {
      return Object.prototype.hasOwnProperty.call(o, 'a');
    };
  },

  b: () => {
    const o = { a: true };

    return () => {
      return o.hasOwnProperty('a');
    };
  },

  names: {
    a: 'Object.prototype.hasOwnProperty',
    b: '.hasOwnProperty',
  },

  options: {
    test_iterations: 1e2,
    function_iterations: 1e4,
  }
};
