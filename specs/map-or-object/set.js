'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    return () => {
      o.set('a', true);
    };
  },

  b: () => {
    const o = {};
    return () => {
      o.a = true;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
