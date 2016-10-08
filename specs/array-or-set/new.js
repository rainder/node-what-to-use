'use strict';

module.exports = {
  a: () => {
    return () => {
      return new Set();
    };
  },

  b: () => {
    return () => {
      return [];
    };
  },

  names: {
    a: 'set',
    b: 'array',
  },

  // options: {
  //   test_iterations: 1e3,
  //   function_iterations: 1e3,
  // }
};
