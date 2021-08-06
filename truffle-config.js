var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    bscTestnet: {
      provider: function () {
        return new HDWalletProvider(
          "",
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
      },
      network_id: "97",
    },

    bscMainnet: {
      provider: function () {
        return new HDWalletProvider("", "https://bsc-dataseed1.ninicoin.io/");
      },
      gasPrice: 5000000000,
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    ropsten: {
      provider: function () {
        return new HDWalletProvider("", "");
      },
      network_id: 3,
      gasPrice: 5000000000,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: "",
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: { optimizer: { enabled: true, runs: 200 } },
    },
  },
};
