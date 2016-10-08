'use strict';

const bson = require('bson');

module.exports = {
  a: () => {
    const o = new Map();
    for (let i = 0; i < 1e5; i++) {
      o.set(bson.ObjectId().toString(), true);
    }

    return () => {
      return o.has('a');
    };
  },

  b: () => {
    const o = {};
    for (let i = 0; i < 1e5; i++) {
      o[bson.ObjectId().toString()] = true;
    }

    return () => {
      return !!o.a;
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
