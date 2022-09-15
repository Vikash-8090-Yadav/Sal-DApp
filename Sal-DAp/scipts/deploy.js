const hre = require("hardhat");

async function main(){
  const allemp = await hre.ethers.getContractFactory("allemp")

  const empadd = await allemp.deploy();

  await empadd.deployed();
  console.log("Factory deployed to:",empadd.address);
}

//  contract address : 0x16fD482Bab105A4f5Aa59a32BD19e3c0c6964A16
main()
.then(()=>
  process.exit(0))
  .catch((error)=>{
    console.log(error);
    process.exit(1);
  });
