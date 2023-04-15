import { ethers } from "hardhat";

async function main() {
  const AutoswapModule = await ethers.getContractFactory("AutoswapModule");
  const autoswapModule = await AutoswapModule.deploy("0xE592427A0AEce92De3Edee1F18E0157C05861564");

  await autoswapModule.deployed();

  console.log(`AutoswapModule deployed to ${autoswapModule.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
