import Users from '../../../instances/Users';
import web3 from '../../../instances/web3';
import { abi } from '../../../build/contracts/Users.json';

import axios from 'axios'
//require('dotenv').config()
//const { ADDRESS_CONTRACT } = process.env


//Operação de Cadastro Blockchain
export const regiterBlockchain = async (objectUser) => {
        const contract = Users(web3)
        const OBJECT = objectUser[0]
            
        const result = await contract.methods
            .registerUser(OBJECT.name, OBJECT.email, OBJECT.password)
            .send({from: OBJECT.account})
        return result
    }

//Operação buscar usuário por Email
export const getUserBlockchain = async(email) => {
    let ABI = abi
    const owner = '0xe782f9D792CC203cC238CbAD56231C239947b2ba'
    const address_contract = '0x8d2ADdd49E49890E2E3F50d61909d36ea714C8c8'
    const contract = new web3.eth.Contract(ABI, address_contract)
    try {
        let result = await contract.methods.getUserByEmail(email).call({ from: owner });
        return result;
    } catch (error) {
        return;
    }
}

function getContractTransaction (){
    let address_contract = '0x8d2ADdd49E49890E2E3F50d61909d36ea714C8c8'
    const API_KEY = 'J2V6FEQHVKG1UY5TQIZYMSX3TEEH4XQH2E'

    async function getTransactions() {
        
        const url = `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${address_contract}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`;
        const response = await axios.get(url);
        const transactions = response.data.result

        if (Array.isArray(transactions)) {
            transactions.forEach(tx => {
                console.log('Tx hash:', tx.hash);
                console.log('From:', tx.from);
                console.log('To:', tx.to);
            });
        } else {
            console.log('transactions is not an array');
        }
    }
    getTransactions()
}
//getContractTransaction()
