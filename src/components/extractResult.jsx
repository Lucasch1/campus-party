import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const ExtractResult = ({ transactionData, objectUser }) => {
    
    function handleCopy() {
        inputRef.current.select();
        document.execCommand('copy');
    }

    return (
        <>
            <div className="ExtractTransaction-container">
                <div className="data-register-1">
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Nome:</div>
                        <div className="p-2 ms-auto">{objectUser[0].name}</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Email:</div>
                        <div className="p-2 ms-auto">{objectUser[0].email}</div>
                    </Stack>
                </div>

                <div className="data-register-2">
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Carteira Blockchain:</div>
                        <div className="ms-auto">
                            0x8f2a5594...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Chave Privada:</div>
                        <div className="ms-auto">
                            0x8f2a5594...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Chave Publica:</div>
                        <div className="ms-auto">
                            0x8f2a5594...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Contrato Associado:</div>
                        <div className="ms-auto">
                            0x8f2a5594...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                </div>
                <h4 className="mt-1 ml-12 fw-bold">Resumo da Transação NFT</h4>

                <div className="data-register-3">
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Transaction HASH:</div>
                        <div className="ms-auto">
                            <a
                                href={`https://mumbai.polygonscan.com/`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {transactionData.transactionHash.substring(0, 10)}... 
                            </a>
                            <button className='ml-1' onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>{' '}
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">De:</div>
                        <div className="ms-auto">
                            {transactionData.from.substring(0, 10)}...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Para:</div>
                        <div className="ms-auto">
                            {transactionData.to.substring(0, 10)}...{' '}
                            <button onClick={handleCopy}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    );
};
export default ExtractResult;
