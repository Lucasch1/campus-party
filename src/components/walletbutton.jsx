import web3 from '../../instances/web3';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WalletButton = () => {
    const [error, setError] = useState('');
    const [address, setAddress] = useState(null);
    //const walletButton = document.getElementById('walletButton');

    useEffect(() => {
        const getAddress = async () => {
            try {
                const accounts = await web3.eth.getAccounts();
                setAddress(accounts[0]);
                documentgetElementById('walletButton').textContent = address.substring(0, 8) + '...';
            } catch (err) {
                setError(err.message);
            }
        };
        getAddress();
    }, [address]);

    const connectWalletHandler = async () => {
        /* verificar se a metamask esta disponivel */
        try {
            /* pedir o wallet connect */
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            /* pegar a lista de contas */
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAddress(accounts[0]);

            /* criar uma copia local dos contratos */

            // Atualizar o texto do botão com o endereço da carteira
            const walletButton = document.getElementById('walletButton');
            walletButton.textContent = address.substring(0, 8) + '...';
        } catch (err) {
            setError(err.message);
        }
    };

    if (address) {
        return (
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-white border-solid border hover:bg-white hover:text-black py-2 px-4 rounded-full"
            >
                MINHA CONTA
            </motion.button>
        );
    }

    return (
        <motion.button
            onClick={connectWalletHandler}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="walletButton"
            className="border-white border-solid border hover:bg-white hover:text-black py-2 px-4 rounded-full"
        >
            ENTRAR COM A METAMASK
        </motion.button>
    );
};

export default WalletButton;
