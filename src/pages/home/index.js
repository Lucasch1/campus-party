import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import web3 from '../../../instances/web3';
import NFTContract from '../../../instances/NFT';
import { useState } from 'react';

const Card = ({ nfts }) => {
    console.log(nfts);

    const [showPopup, setShowPopup] = useState(null);

    const handleIconClick = (index) => {
        setShowPopup(index === showPopup ? null : index);
    };

    const mintHandler = async () => {
        const accounts = await web3.eth.getAccounts();
        const NFTInstance = NFTContract(web3);
        const result = await NFTInstance.methods.mint(accounts[0], "https://tomato-secure-lobster-753.mypinata.cloud/ipfs/QmetdCtV3nt4kgYwe7S6BXrXrGTqZsHn57r7DDMyoeJSJ5?_gl=1*42x03g*_ga*NDEzMDMxNTI1LjE2ODk4NjUxMTY.*_ga_5RMPXG14TE*MTY5MDU5MDA4My4zLjEuMTY5MDU5MDA4OC41NS4wLjA.").send({ from: accounts[0] });
        console.log(result);
    }

    const cardData = [
        {
            //imageSrc: 'caminho/para/imagem1.jpg',
            title: 'COLEÇÃO 1',
            buttonText: 'GERAR',
            hoverInfo: 'Informações sobre o Card 1',
        },
        {
            //imageSrc: 'caminho/para/imagem2.jpg',
            title: 'COLEÇÃO 2',
            buttonText: 'GERAR',
            hoverInfo: 'Informações sobre o Card 2',
        },
        {
            //imageSrc: 'caminho/para/imagem3.jpg',
            title: 'COLEÇÃO 3',
            buttonText: 'GERAR',
            hoverInfo: 'Informações sobre o Card 3',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen grid grid-cols-3 gap-20 max-w-7xl mx-auto p-4">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black/50 rounded-lg shadow p-6 cursor-pointer relative h-2/3 my-auto flex flex-col items-center"
                    >
                        <Image
                            src={card.imageSrc}
                            alt={card.title}
                            className="w-full h-2/3 object-cover bg-white rounded-lg"
                        />
                        <h2 className="text-3xl text-white font-semibold my-4">{card.title}</h2>
                        <button onClick={mintHandler} className="mt-2 w-2/3 bg-white hover:bg-black hover:text-white px-4 py-4 rounded-xl">
                            {card.buttonText}
                        </button>
                        <motion.div
                            onClick={() => handleIconClick(index)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-6 right-6 px-4 py-2 rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </motion.div>
                    </motion.div>
                ))}
                {showPopup !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white"
                    >
                        <div onClick={() => handleIconClick(null)} className="bg-black/50 flex p-4 rounded-lg">
                            <Image
                                src={cardData[showPopup].imageSrc}
                                alt={cardData[showPopup].title}
                                className="w-full h-2/3 object-cover bg-white rounded-lg"
                            />
                            <h3 className="text-xl font-semibold">{cardData[showPopup].title}</h3>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const accounts = await web3.eth.getAccounts();
    const NFTInstance = NFTContract(web3);
    const nfts = await NFTInstance.methods.getNFts().call({ from: accounts[0] });

    return { props: { nfts } };
};

export default Card;
