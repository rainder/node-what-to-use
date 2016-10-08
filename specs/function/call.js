'use strict';

module.exports = {

  a: () => {
    const o = function () {

    };

    return () => {
      return o();
    };
  },

  b: () => {
    const o = function () {

    };

    return () => {
      return o.call(this);
    };
  },

  names: {
    a: 'native',
    b: '.call',
  },

  options: {
    test_iterations: 1e2,
    function_iterations: 1e4,
  }
};
