'use strict';

const bson = require('bson');

module.exports = {
  a: () => {
    const o = new Map();
    for (let i = 0; i < 1e5; i++) {
      o.set(bson.ObjectId().toString(), true);
    }

    const key = Array.from(o.keys())[0];

    return () => {
      return o.has(key);
    };
  },

  b: () => {
    const o = {};
    for (let i = 0; i < 1e5; i++) {
      o[bson.ObjectId().toString()] = true;
    }

    const key = Object.keys(o)[0];

    return () => {
      return !!o[key];
    };
  },

  names: {
    a: 'map',
    b: 'object',
  },
};
