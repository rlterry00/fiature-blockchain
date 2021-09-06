const SHA256 = require("crypto-js/sha256");

module.exports = class BlockCypto {
  constructor(index, current_time, info, nextHash = " ") {
    this.index = index;
    this.current_time = current_time;
    this.info = info;
    this.nextHash = nextHash;
    this.hash = this.computeHash();
  }
  computeHash() {
    return SHA256(
      this.info + this.nextHash + this.current_time + JSON.stringify(this.info)
    ).toString();
  }
}
