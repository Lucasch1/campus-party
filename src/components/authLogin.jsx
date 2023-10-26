import { useState } from 'react';
import FormLogin from '@/components/formLogin';
import FormRegister from '@/components/formRegister';
import ExtractTransaction from '@/components/extractTransaction';
import LoadingShape from '@/components/loading';
import Modal from 'react-bootstrap/Modal';



const AuthLogin = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <FormLogin handleShow={handleShow}/>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegister />
                </Modal.Body>
            </Modal>
        </>
    );
};
export default AuthLogin;
