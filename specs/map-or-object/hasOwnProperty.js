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
      return o.hasOwnProperty('a');
    };
  },

  names: {
    a: 'map.has',
    b: 'hasOwnProperty',
  },
};
