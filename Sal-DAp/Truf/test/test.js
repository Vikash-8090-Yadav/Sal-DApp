// web3 = require("Web3")
// https://rpc-mumbai.maticvigil.com
var Web3 = require('web3');

const main = async ()=>{
  // const provider = new Web3.providers(
  const provider = new Web3(new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com'))
  //   // "https://rpc-mumbai.maticvigil.com"
  // );
  // var web3 = new Web3("https://rpc-mumbai.maticvigil.com");
const contract = new web3.eth.Contract(
  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "FirstName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "LastName",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "salAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "image",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "Posotion",
          "type": "string"
        }
      ],
      "name": "salcreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedSal",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_FirstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_LastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_wallet_ddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_image",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Posotion",
          "type": "string"
        }
      ],
      "name": "addemp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "0x8765d32Ad9907e2371409a17f194e713E8f4e19a"
);

// var filter = web3.eth.filter({
// 	fromBlock: 0,
// 	toBlock: 'latest',
// 	address: '0x8765d32Ad9907e2371409a17f194e713E8f4e19a'
// });

// const getemp = filter.salcreated();
// let events = await contract.methods.salcreated();
// let event = events.reverse();
// console.log(event);

const currentBlock = web3.eth.getBlockNumber;

var filter = web3.eth.filter('latest');
const sal= await contract.filter.salcreated();
// filter.watch(function(error, result) {
//   var block = web3.eth.getBlock(result, true);
//   console.log('block #' + block.number);
//   console.dir(block.transactions);
// });

console.log(sal);

// const sa = contract.events.salcreated({
//     filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
//     fromBlock: 12
// }, function(error, event){ console.log(event); })
// .on('data', function(event){
//     console.log(event); // same results as the optional callback above
// }).on('error', console.error);
//
// // let ev = await contract.queryFilter(sa);
// // let event = ev.reverse();
// console.log(sa);
};
main();
