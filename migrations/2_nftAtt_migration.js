const NFT = artifacts.require('MyToken');

module.exports = function (deployer) {
    deployer.deploy(NFT);
};
