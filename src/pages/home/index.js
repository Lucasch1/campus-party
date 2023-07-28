import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import web3 from "../../../instances/web3";
import NFTContract from "../../../instances/NFT";

const Card = ({ nfts }) => {
    console.log(nfts);

    const cardData = [
        
        {
            //imageSrc: 'caminho/para/imagem1.jpg',
            title: 'Título do Card 1',
            buttonText: 'Botão 1',
            hoverInfo: 'Informações sobre o Card 1',
        },
        {
            //imageSrc: 'caminho/para/imagem2.jpg',
            title: 'Título do Card 2',
            buttonText: 'Botão 2',
            hoverInfo: 'Informações sobre o Card 2',
        },
        {
            //imageSrc: 'caminho/para/imagem3.jpg',
            title: 'Título do Card 3',
            buttonText: 'Botão 3',
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
                        className="bg-black/50 rounded-lg shadow p-4 cursor-pointer relative h-2/3 my-auto flex flex-col items-center"
                    >
                        <Image src={card.imageSrc} alt={card.title} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
                        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            {card.buttonText}
                        </button>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute bottom-4 bg-gray-900 text-white px-4 py-2 rounded-lg pointer-events-none"
                        >
                            {card.hoverInfo}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const accounts = await web3.eth.getAccounts();
    const NFTInstance = NFTContract(web3);
    const nfts = await NFTInstance.methods.getNFts().call({from: accounts[0]});
    
    return { props: { nfts }}
}

export default Card;
