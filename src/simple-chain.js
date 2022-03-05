const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],

  getLength() {
    return this.list.length;
  },

  addLink(value) {
    this.list.push(value);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || position < 1 || position > this.getLength()){
      this.list = [];
      throw Error('You can\'t remove incorrect link!');
    }
    this.list = this.list.filter((e, i) => i !== position - 1 )
    return this;
  },
  reverseChain() {
   this.list = this.list.reverse();
   return this;
  },
  finishChain() {
    const finish = this.list.map(e=> `( ${e} )`).join('~~');
    this.list = [];
    return finish;
  }
};


module.exports = {
  chainMaker
};
