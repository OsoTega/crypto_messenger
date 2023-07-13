//https://eth-sepolia.g.alchemy.com/v2/ToH8QPBe5y4RB21LuXU_bc4cT-JMlM_4
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ToH8QPBe5y4RB21LuXU_bc4cT-JMlM_4',
      accounts: ['370cbb95dcb1ecaa120d6d4390f477747f58b82780374591066a99266df04bc7']
    }
  }
};
