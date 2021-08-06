const MuskDogeCoin = artifacts.require("MaskDogeCoin");

const supply = "1000000000000000"; //1e15
const txFee = 6;
const lpFee = 4;
const mFee = 1;

const maxAmount = "1000000000000"; //1e12 e9
const sellMaxAmount = "100000000000"; //1e11 e9

const routerAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const tokenOwner = "0x882133739ed6aae0cbc670a585edad90031e8977";
const marketingAddress = "0x9996f2d5344a2396052a414ce093c8b5c61dcdac";

module.exports = function (deployer) {
  deployer.deploy(
    MuskDogeCoin,
    supply,
    txFee,
    lpFee,
    mFee,
    maxAmount,
    sellMaxAmount,
    routerAddress,
    tokenOwner,
    marketingAddress
  );
};
