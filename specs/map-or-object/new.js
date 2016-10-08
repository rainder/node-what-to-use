'use strict';

module.exports = {
  a: () => {
    return () => {
      return new Map();
    };
  },

  b: () => {
    return () => {
      return {};
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },

  // options: {
  //   test_iterations: 1e3,
  //   function_iterations: 1e3,
  // }
};
