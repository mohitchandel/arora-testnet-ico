// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // Deploying token 
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy();
  await token.deployed();

  console.log("Token deployed to =>",token.address)
  // 0x24e8a53e64eC41e3c236D7989e621F6EcC9bd85C

  // Deploying Contract
  const crowdSaleContract = await ethers.getContractFactory("Crowdsale");
  const crowdSale = await crowdSaleContract.deploy(token.address);
  await crowdSale.deployed();

  console.log("contract deployed to =>",crowdSale.address)
  // 0x8C513097a750f381ACBB6F897B7384a6ac7D6B74
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
