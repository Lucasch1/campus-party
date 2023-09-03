import NFTContract from '../../../backend/instances/NFT';
import web3 from '../../../backend/instances/web3';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GameID = ({ data }) => {
    // console.log(data);
    const gameProps = data;
    const addr = data.addr;
    const datas = data.nfts;

    return (
        <>
            <div className="py-4 text-amber">
                <div className="flex justify-center py-6 text-6xl font-bold text-center text-purple">COLEÇÃO</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {datas.map((improvements, index) => (
                        <div key={index}>
                            <div className="h-full p-3 bg-dgold rounded-xl flex flex-col overflow-hidden">
                                <h1 className='font-bold text-4xl mb-4"'>{improvements.nfts}</h1>

                                <p className='font-bold text-2xl mb-4"'>{improvements.nfts}</p>
                                <p className='font-bold text-2xl mb-4"'>{improvements.nfts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ({ query }) => {
    const addr = query.profileId;

    const nftContractInstance = await NFTContract(web3, addr);
    const dataPromises = async () => {
        const nfts = await nftContractInstance.methods.getUserNFTs(addr).call();

        return {
            nfts,
        };
    };

    // const data = await Promise.all(dataPromises());
    const data = await dataPromises();

    return { props: { data: data } };
};

export default GameID;
