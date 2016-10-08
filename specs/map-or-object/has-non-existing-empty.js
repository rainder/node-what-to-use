'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    return () => {
      return o.has('a');
    };
  },

  b: () => {
    const o = {};
    return () => {
      return !!o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
