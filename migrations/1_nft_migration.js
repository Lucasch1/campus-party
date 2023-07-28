const NFT = artifacts.require('NFT')

const name = "MidasChest"
const symbol = "MDC"

module.exports = function (deployer) {
    deployer.deploy(NFT, name, symbol)
}
