const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  chain: [],

  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      if (value === undefined) {
          this.chain.push(' ');
      } else {
          this.chain.push(value);
      }
      return this;
  },
  removeLink(position) {
      if (!Number.isInteger(position)
          || position < 1
          || position > this.chain.length) {
          this.chain = [];
          throw new TypeError('You can\'t remove incorrect link!');
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let chainText =  this.chain.map(item => `( ${item} )`).join('~~');
      this.chain = [];
      return chainText;
  }
};

module.exports = {
  chainMaker
};
