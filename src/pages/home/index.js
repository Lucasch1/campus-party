import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import web3 from '../../../instances/web3';
import NFTContract from '../../../instances/NFT';
import { useState } from 'react';
import maps from '../../../public/mapa.svg';

const Card = ({ nfts }) => {
    console.log(nfts);
    const [showPopup, setShowPopup] = useState(null);

    const handleIconClick = (index) => {
        setShowPopup(index === showPopup ? null : index);
    };

    const fetchData = async () => {
        try {
            const response = await fetch('/api/backend');
            const result = await response.json();
            const dat = result.resultado.photos[0].url;
            return dat;
        } catch (error) {
            console.error('Erro ao buscar dados da API', error);
        }
    };

    const mintHandler = async () => {
        const d = await fetchData();
        const accounts = await web3.eth.getAccounts();
        const NFTInstance = NFTContract(web3);

        const result = await NFTInstance.methods.mint(accounts[0], d).send({ from: accounts[0] });
        console.log(result);
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
            <div className="w-full bg-[url(../../public/woodbg.svg)] bg-cover bg-center">
                <div className="  min-h-screen grid grid-cols-3 gap-20 max-w-7xl mx-auto p-4">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[url(../../public/mapa.svg)] bg-contain bg-no-repeat bg-center aspect-[1/1.4] cursor-pointer relative  my-auto flex flex-col items-center"
                        >
                            <h2 className="text-3xl text-dbrown font-semibold h-[26%] flex items-center">
                                {card.title}
                            </h2>
                            <div className="w-full  h-[44%] flex items-center justify-center">
                                <div className="h-2/3 w-full bg-[url(../../public/bau.svg)] bg-contain bg-no-repeat bg-center" />
                            </div>

                            <button
                                onClick={mintHandler}
                                className="h-[10%] w-1/2 bg-[url(../../public/woodbt.svg)] bg-contain bg-no-repeat bg-center text-cbrown hover:text-white active:text-cbrown font-bold px-4"
                            >
                                {card.buttonText}
                            </button>
                            <div className="h-[20%] w-full"></div>
                            <motion.div
                                onClick={() => handleIconClick(index)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-1/4 right-[10%] px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="43"
                                    viewBox="0 0 42 43"
                                    fill="none"
                                >
                                    <path
                                        d="M23.3964 27.9494C22.3808 29.03 21.7207 29.4811 21.2683 29.4811C20.9536 29.4811 20.8465 29.202 20.9166 28.5724C21.1281 26.9362 22.3464 21.6746 22.693 19.795C23.0409 18.1868 22.9376 17.3522 22.484 17.3522C21.6162 17.3522 19.4883 18.7807 18.0942 20.2079C18.0228 20.3175 17.8852 20.9075 17.9565 21.1152C17.9565 21.1866 18.0597 21.2222 18.0597 21.2222C18.897 20.5596 19.5596 20.1747 19.9444 20.1747C20.1164 20.1747 20.184 20.4525 20.0821 20.9418C19.6641 23.0317 18.967 26.2759 18.4446 28.9571C17.9566 31.2954 18.2675 32.2346 19.0002 32.2346C19.7328 32.2346 21.754 31.2573 23.3965 29.0616C23.4627 28.8908 23.5303 28.2307 23.4984 28.0538C23.4983 27.9863 23.3964 27.9494 23.3964 27.9494Z"
                                        fill="#3A2020"
                                    />
                                    <path
                                        d="M23.079 11.3565C22.4839 11.3565 21.7538 11.635 21.4059 11.9847C21.2682 12.1594 21.1281 12.6811 21.0911 12.9589C21.1281 13.5878 21.3014 13.9363 21.6505 14.1465C21.8224 14.2835 22.9733 14.1803 23.2179 14.0395C23.641 13.7624 24.0195 13.2036 24.0908 12.541C24.1214 12.2294 24.0551 11.8083 23.9161 11.6005C23.8462 11.4967 23.5658 11.3565 23.079 11.3565Z"
                                        fill="#3A2020"
                                    />
                                    <path
                                        d="M21.0173 0.917542C9.48609 0.917542 0.13913 10.2645 0.13913 21.7957C0.13913 33.3269 9.48609 42.6738 21.0173 42.6738C32.5484 42.6738 41.8954 33.3269 41.8954 21.7957C41.8954 10.2645 32.5484 0.917542 21.0173 0.917542ZM21.0173 39.4116C11.288 39.4116 3.40134 31.525 3.40134 21.7957C3.40134 12.0664 11.288 4.17975 21.0173 4.17975C30.7466 4.17975 38.6332 12.0664 38.6332 21.7957C38.6332 31.525 30.7466 39.4116 21.0173 39.4116Z"
                                        fill="#3A2020"
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
                            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-2xl"
                        >
                            <div className="relative max-w-7xl aspect-[2.3/1] bg-[url(../../public/bigmap.svg)] bg-contain bg-no-repeat bg-center w-full flex px-52 py-28">
                                <Image
                                    src={cardData[showPopup].imageSrc}
                                    alt={cardData[showPopup].title}
                                    className="h-full w-1/3  object-cover bg-white rounded-lg"
                                />
                                <div className="text-white w-2/3 pl-10">
                                    <h3 className="text-3xl ">SOBRE A COLEÇÃO</h3>
                                    <p className="text-xl">
                                        hsdfbsdjfhsjkdhfsjkdhfskdjhfasdasdasdasdl sjkdhfslk jdhfksjhdfkljsdhfks
                                        sjdfhskjdhfskdljhfskjdfhsdjhfk sjdhfksjdhfkjsdhkj
                                    </p>
                                </div>
                                <motion.div
                                    onClick={() => handleIconClick(null)}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[10%] right-[5%] px-4 py-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="52"
                                        height="51"
                                        viewBox="0 0 52 51"
                                        fill="none"
                                    >
                                        <path
                                            d="M47 5L5.33763 46M5 5L46.6624 46"
                                            stroke="white"
                                            stroke-width="10"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M47 5L5.33763 46M5 5L46.6624 46"
                                            stroke="#3E0D0B"
                                            stroke-width="10"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </div>
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
