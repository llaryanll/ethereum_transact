const hre = require("hardhat");
import { ethers } from "hardhat";
const main = async () => {
  //console.log('hi');
  const Transaction = await hre.ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log("Transactions deployed to : ", transaction.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();
