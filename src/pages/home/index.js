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
                        <button className="mt-2 w-2/3 bg-white hover:bg-black hover:text-white px-4 py-4 rounded-xl">
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
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                <path
                                    d="M18.3802 21.3633C17.5776 22.2173 17.0559 22.5738 16.6984 22.5738C16.4497 22.5738 16.365 22.3532 16.4205 21.8556C16.5876 20.5626 17.5504 16.4043 17.8243 14.9188C18.0993 13.6479 18.0177 12.9883 17.6592 12.9883C16.9733 12.9883 15.2916 14.1172 14.1899 15.2452C14.1335 15.3318 14.0247 15.7981 14.0811 15.9622C14.0811 16.0186 14.1627 16.0468 14.1627 16.0468C14.8243 15.5231 15.348 15.2189 15.6521 15.2189C15.788 15.2189 15.8415 15.4385 15.7609 15.8252C15.4306 17.4768 14.8797 20.0407 14.4668 22.1596C14.0811 24.0076 14.3268 24.7499 14.9059 24.7499C15.4849 24.7499 17.0822 23.9775 18.3803 22.2423C18.4326 22.1073 18.4861 21.5856 18.4609 21.4458C18.4608 21.3925 18.3802 21.3633 18.3802 21.3633Z"
                                    fill="black"
                                />
                                <path
                                    d="M18.1294 8.25C17.6591 8.25 17.0821 8.47004 16.8071 8.74648C16.6983 8.88448 16.5876 9.29685 16.5584 9.51637C16.5876 10.0134 16.7245 10.2888 17.0005 10.4549C17.1363 10.5632 18.0458 10.4816 18.2392 10.3704C18.5736 10.1514 18.8726 9.70973 18.929 9.18605C18.9532 8.93984 18.9008 8.60701 18.791 8.44284C18.7357 8.3608 18.5141 8.25 18.1294 8.25Z"
                                    fill="black"
                                />
                                <path
                                    d="M16.5 0C7.38691 0 0 7.38691 0 16.5C0 25.6131 7.38691 33 16.5 33C25.6131 33 33 25.6131 33 16.5C33 7.38691 25.6131 0 16.5 0ZM16.5 30.4219C8.81094 30.4219 2.57812 24.1891 2.57812 16.5C2.57812 8.81094 8.81094 2.57812 16.5 2.57812C24.1891 2.57812 30.4219 8.81094 30.4219 16.5C30.4219 24.1891 24.1891 30.4219 16.5 30.4219Z"
                                    fill="black"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                ))}
                {showPopup !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white/25 backdrop-blur-2xl"
                    >
                        <div
                            onClick={() => handleIconClick(null)}
                            className="max-w-7xl h-[40%] bg-black/50 w-full flex p-12 rounded-lg"
                        >
                            <Image
                                src={cardData[showPopup].imageSrc}
                                alt={cardData[showPopup].title}
                                className="h-full w-1/2 mr-10 object-cover bg-white rounded-lg"
                            />
                            <div className="text-white w-1/2">
                                <h3 className="text-3xl ">SOBRE A COLEÇÃO</h3>
                                <p className="text-xl">
                                    hsdfbsdjfhsjkdhfsjkdhfskdjhfasdasdasdasdl sjkdhfslk
                                    jdhfksjhdfkljsdhfkssjdfhskjdhfskdljhfskjdfhsdjhfksjdhfksjdhfkjsdhkj
                                </p>
                            </div>
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
