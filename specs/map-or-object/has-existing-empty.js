'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    o.set('a', true);

    return () => {
      return o.has('a');
    };
  },

  b: () => {
    const o = {};
    o.a = true;

    return () => {
      return !!o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
