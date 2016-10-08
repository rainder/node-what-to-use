'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    return () => {
      o.set('a', true);
      o.delete('a');
    };
  },

  b: () => {
    const o = {};
    return () => {
      o.a = true;
      delete o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
