import { useState, useEffect } from 'react';
import FormLogin from '@/components/formLogin';
import FormRegister from '@/components/formRegister';
import ExtractTransaction from '@/components/extractResult';
import LoadingShape from '@/components/loading';
import Modal from 'react-bootstrap/Modal';




const AuthLogin = ({setLoginMidas}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState(false);

    const [transactionData, setTransactionData] = useState(null);
    const [objectUser, setObjectUser] = useState(null);

    const [loginPermission, setLoginPermission] = useState(false);

    
    //Isso é horrível tá
    useEffect(() => {
      if(loginPermission){
        setLoginMidas(true)
      }
    }, [loginPermission, setLoginMidas]);


    function handleTransaction(resultTransaction, objectUser) {
      setTransactionData(resultTransaction);
      setObjectUser(objectUser);
      setShow(true);

    }

    return (
        <>
        <div>
            <div>
              {loading && <LoadingShape />}
              <FormLogin handleShow={handleShow} setLoginPermission={setLoginPermission}/>
              <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <div className='title-modal-custon'>
                      <h2 className="text-gray-900 font-mono font-bold text-xl">Registre-se e ganhe um NFT</h2>
                      <h3 className=" text-gray-900 font-mono font-bold">MidasChest</h3>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {objectUser && <ExtractTransaction transactionData={transactionData} objectUser={objectUser} />}               
                {!objectUser && <FormRegister setLoading={setLoading} setShow={setShow} onTransaction={handleTransaction} />}
                </Modal.Body>
              </Modal>
            </div>
            </div>
        </>
    );
};
export default AuthLogin;
