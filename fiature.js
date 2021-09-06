const BlockCrypto = require("./crypto/BlockCrypto");
const Blockchain = require("./blockchain/BlockChain");

let testTimeCoin = new Blockchain();
const hour = { hours: 1, minutes: 0 };
const halfHour = { hours: 0, minutes: 30 };

//payment needs to be currency
//total needs to be added

testTimeCoin.addNewBlock(
  new BlockCrypto(2, "07/04/2021", {
    sender: { first_name: "Ramon", last_name: "Terry" },
    recipient: { first_name: "Josh", last_name: "Person" },
    quantity: 36,
    value: hour,
    payment: "$50.00",
  })
);

testTimeCoin.addNewBlock(
  new BlockCrypto(1, "06/04/2021", {
    sender: { first_name: "Ramon", last_name: "Terry" },
    recipient: { first_name: "Steve", last_name: "Person" },
    quantity: 1,
    value: halfHour,
    payment: "$10.00",
  })
);



console.log(JSON.stringify(testTimeCoin, null, 4));
