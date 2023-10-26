import Web3 from 'web3'

const { PROJECT_ID } = process.env
const key_infura = '3ba30abc3cc1417a95ed2f2389049887'

let web3

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum)
} else {
    const provider = new Web3.providers.HttpProvider(`https://polygon-mumbai.infura.io/v3/${key_infura}`)
    web3 = new Web3(provider)
}

export default web3
