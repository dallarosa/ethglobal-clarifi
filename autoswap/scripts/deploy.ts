import { ethers } from "hardhat";

async function main() {
  const AutoswapModule = await ethers.getContractFactory("AutoswapModule");
  const autoswapModule = await AutoswapModule.deploy("0x93bcDc45f7e62f89a8e901DC4A0E2c6C427D9F25");

  await autoswapModule.deployed();

  console.log(`AutoswapModule deployed to ${autoswapModule.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
