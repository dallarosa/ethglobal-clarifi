import "dotenv/config";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import ethers from "ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY!]
    },
    gnosis: {
      url: "https://rpc.gnosis.gateway.fm",
      accounts: [process.env.PRIVATE_KEY!]
    },
    scroll: {
      url: "https://alpha-rpc.scroll.io/l2",
      accounts: [process.env.PRIVATE_KEY!]
    }
  }
};

export default config;
