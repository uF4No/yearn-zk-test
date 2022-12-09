require("@nomiclabs/hardhat-vyper");
require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-vyper");

module.exports = {
    zksolc: {
        version: "1.2.1",
        compilerSource: "binary",
        settings: {},
    },
    zkvyper: {
        version: "1.2.1",
        compilerSource: "binary",
        settings: {},
    },
    zkSyncDeploy: {
        zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
        ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    },
    networks: {
        hardhat: {
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.16",
    },
    vyper: {
        version: "0.3.3",
    },
};
