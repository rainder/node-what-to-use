'use strict';

module.exports = {
  a: () => {
    const o = new Map();
    return () => {
      return o.delete('a');
    };
  },

  b: () => {
    const o = {};
    return () => {
      delete o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
