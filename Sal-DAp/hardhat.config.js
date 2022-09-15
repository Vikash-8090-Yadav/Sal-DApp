/** @type import('hardhat/config').HardhatUserConfig */

require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "polygon",
  networks:{
    hardhat:{},
    polygon :{
      url : "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383",
      accounts: ["0x85af3a27ba32f9df3bb6f3bfb9d48119417ba85ff5fddd464c54e5457e99d8f7"]
    }
  }
};
