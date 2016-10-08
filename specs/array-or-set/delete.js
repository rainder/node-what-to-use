'use strict';

module.exports = {

  a: () => {
    const o = new Set();
    for (let i = 0; i < 1e5; i++) {
      o.add(i);
    }

    let i = 1e5;
    return () => {
      o.add(i--);
    };
  },

  b: () => {
    const o = [];
    for (let i = 0; i < 1e5; i++) {
      o.push(i);
    }

    let i = 1e5;
    return () => {
      i--;
      const index = o.indexOf(i);

      if (index !== -1) {
        o.splice(index, 1);
      }
    };
  },

  names: {
    a: 'set',
    b: 'array',
  },

  options: {
    test_iterations: 1e1,
    function_iterations: 1e2,
  }
};
