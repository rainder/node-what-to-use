'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    return () => {
      return o.get('a');
    };
  },

  b: () => {
    const o = {};
    return () => {
      return o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
