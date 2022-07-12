const { expect } = require("chai");
const { ethers, artifacts } = require("hardhat");

let admin, buyer;
let crowdSale;
let token;


describe("Crowdsale", function () {

  beforeEach(async function () {

    [admin, buyer] = await ethers.getSigners();

    // Deploying token 
    const MyToken = await ethers.getContractFactory("MyToken");
    token = await MyToken.deploy();
    await token.deployed();

    // Deploying Contract
    const crowdSaleContract = await ethers.getContractFactory("Crowdsale");
    crowdSale = await crowdSaleContract.deploy(token.address);
    await crowdSale.deployed();

  });

  describe("Approve token spend", function () {
    it("Should Allow token spend", async function () {
      const tokenTotalSupply = await token.totalSupply()
      await token.approve(crowdSale.address, ethers.BigNumber.from(tokenTotalSupply))
      expect(await token.allowance(admin.address, crowdSale.address)).to.equal(await token.totalSupply());
    });

  });

  describe("Start crowd Sale", function () {
    it("Should Start sale", async function () {
      await crowdSale.startCrowdsale()
      expect(await crowdSale.icoPhase()).to.equal(1);
    });

    it("Should able to buy token", async function () {
      const tokenTotalSupply = await token.totalSupply()
      const price = ethers.BigNumber.from("1000000000000000000")
      await token.approve(crowdSale.address, ethers.BigNumber.from(tokenTotalSupply))
      await crowdSale.startCrowdsale()
      await crowdSale.connect(buyer).buyToken(price, {value: price});
      console.log("Token Bought =>",await token.balanceOf(buyer.address))
      expect(await token.balanceOf(buyer.address)).not.to.equal(ethers.BigNumber.from(0))
    });
  });

  
});