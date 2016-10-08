'use strict';

const bson = require('bson');

module.exports = {
  a: () => {
    const o = new Map();
    for (let i = 0; i < 1e2; i++) {
      o.set(bson.ObjectId().toString(), true);
    }

    const key = Array.from(o.keys())[o.size - 1];

    return () => {
      return o.has(key);
    };
  },

  b: () => {
    const o = {};
    for (let i = 0; i < 1e2; i++) {
      o[bson.ObjectId().toString()] = true;
    }

    const keys = Object.keys(o);
    const key = keys[keys.length - 1];

    return () => {
      return o.hasOwnProperty(key);
    };
  },

  names: {
    a: 'map.has',
    b: 'hasOwnProperty',
  },
};
