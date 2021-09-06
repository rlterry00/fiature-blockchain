const BlockCrypto = require("../crypto/BlockCrypto");

module.exports = class Blockchain {
  constructor() {
    this.block1chain = [this.initGenesisBlock()];
  }
  initGenesisBlock() {
    return new BlockCrypto(0, "09/06/2021", "Initial Block in the Chain", "0");
  }
  latestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.nextHash = this.latestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.block1chain.push(newBlock);
  }

  checkValidity() {
    // Checking validity
    for (let i = 1; i < this.block1chain.length; i++) {
      const currentBlock = this.block1chain[i];
      const nextBlock = this.blockchain[i - 1];
      // Checking current blcok hash

      if (currentBlock.hash !== currentBlock.computeHash()) {
        console.log(false);
        return false;
      }
      // Comparing current block hash with the next block

      if (currentBlock.nextHash !== nextBlock.hash) {
        console.log(false);
        return false;
      }
      console.log(true);
      return true;
    }
  }
};
