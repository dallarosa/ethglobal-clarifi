import { ethers } from "hardhat";

async function main() {
  const AutoswapModule = await ethers.getContractFactory("AutoswapModule");
  const autoswapModule = await AutoswapModule.attach("0xc960769Ab69aAfB5A19d19A060cB0D9beD43d083");
  await autoswapModule.deployed();
  await autoswapModule.executeAutoswap(
    "0x04A55848D38EDec988A6F2287B8E00718E14ab14",
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
"1000000",
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
