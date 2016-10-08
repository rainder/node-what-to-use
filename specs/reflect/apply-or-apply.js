'use strict';

module.exports = {

  a: () => {
    const ctx = {};
    const o = function () {

    };

    return () => {
      return Reflect.apply(o, ctx, [true]);
    };
  },

  b: () => {
    const ctx = {};
    const o = function () {

    };

    return () => {
      return o.apply(ctx, [true]);
    };
  },

  names: {
    a: 'Reflect.apply',
    b: '.apply',
  },

  options: {
    test_iterations: 1e2,
    function_iterations: 1e5,
  }
};
