import {useContext} from 'react';
import {ModalContext} from '../contexts/ModalContext/ModalContext';
import RegisterForm from './RegisterForm';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Modal from '../components/Modal';

const LandingPage = () => {
    const {handleOpen, isModalOpen} = useContext(ModalContext);

    return (
        <div>
            <Header />
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <h1 className='text-5xl font-bold'>
                            Projects. Together.
                        </h1>
                        <p className='py-6'>
                            Organize your team goals and deploy faster
                        </p>
                        <button
                            type='button'
                            className='btn btn-primary'
                            data-modal='modal-register'
                            onClick={handleOpen}
                        >
                            Get Started
                        </button>
                        {/* {isModalOpen && <RegisterForm  />} */}
                    </div>
                </div>
            </div>
            <Modal>
                <LoginForm />
            </Modal>
        </div>
    );
};
export default LandingPage;
