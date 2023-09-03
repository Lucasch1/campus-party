import web3 from '../../backend/instances/web3';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WalletButton = () => {
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    //const walletButton = document.getElementById('walletButton');

    useEffect(() => {
        if (localStorage.getItem('userAddress')) {
            setAddress(localStorage.getItem('userAddress'));
        }
    }, []);

    const [showDrop, setShowDrop] = useState({
        drop1: false,
        drop2: false,
        drop3: false,
        drop4: false,
    });

    const handleDropClick = (drop) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showDrop[drop];

        // Fechar todas as divs
        const updatedShowDrop = {
            drop1: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowDrop[drop] = true;
        }

        // Atualizar o estado
        setShowDrop(updatedShowDrop);
    };

    const connectWalletHandler = async () => {
        /* verificar se a metamask esta disponivel */
        try {
            /* pedir o wallet connect */
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            /* pegar a lista de contas */
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAddress(accounts[0]);

            // Save the address to local storage
            localStorage.setItem('userAddress', accounts[0]);

            /* criar uma copia local dos contratos */

            // Atualizar o texto do botão com o endereço da carteira
            const walletButton = document.getElementById('walletButton');
            walletButton.textContent = address.substring(0, 8) + '...';
        } catch (err) {
            setError(err.message);
        }
    };

    console.log(address);

    const handleLogout = async () => {
        // Clear the stored address from local storage
        localStorage.removeItem('userAddress');
        setAddress(null);
    };

    if (address) {
        return (
            <motion.button
                onClick={() => handleDropClick('drop1')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-2 px-4 relative text-dbrown"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M29 58C45.0167 58 58 45.0167 58 29C58 12.9833 45.0167 0 29 0C12.9833 0 0 12.9833 0 29C0 45.0167 12.9833 58 29 58ZM37.7 23.2C37.7 25.5074 36.7834 27.7203 35.1518 29.3518C33.5203 30.9834 31.3074 31.9 29 31.9C26.6926 31.9 24.4797 30.9834 22.8482 29.3518C21.2166 27.7203 20.3 25.5074 20.3 23.2C20.3 20.8926 21.2166 18.6797 22.8482 17.0482C24.4797 15.4166 26.6926 14.5 29 14.5C31.3074 14.5 33.5203 15.4166 35.1518 17.0482C36.7834 18.6797 37.7 20.8926 37.7 23.2ZM11.6 43.5C13.6242 40.7969 16.2509 38.6031 19.2714 37.0928C22.2919 35.5826 25.623 34.7975 29 34.8C32.377 34.7975 35.7081 35.5826 38.7286 37.0928C41.7491 38.6031 44.3758 40.7969 46.4 43.5C44.3758 46.2031 41.7491 48.3969 38.7286 49.9072C35.7081 51.4174 32.377 52.2025 29 52.2C25.623 52.2025 22.2919 51.4174 19.2714 49.9072C16.2509 48.3969 13.6242 46.2031 11.6 43.5Z"
                        fill="#3A2020"
                    />
                </svg>
                {showDrop.drop1 && (
                    <div className="absolute right-0 top-[100%] flex flex-col items-center rounded-xl p-4 bg-black/50 backdrop-blur-xl">
                        <Link
                            href={`/${address}`}
                            className="py-1 px-5 bg-cbrown w-full rounded-xl mb-2 text-center hover:bg-dbrown hover:text-cbrown active:bg-cbrown active:text-dbrown"
                        >
                            COLEÇÃO
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="p-1 px-5 bg-cbrown w-full rounded-xl text-center hover:bg-dbrown hover:text-cbrown active:bg-cbrown active:text-dbrown"
                        >
                            LOGOUT
                        </button>
                    </div>
                )}
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
