import Modal from 'react-modal';
import { Container } from './styles';

interface NewClientModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function PatientModal({ isOpen, onRequestClose }: NewClientModalProps) {
    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <Container>
                <img className="react-modal-image" src="https://randomuser.me/api/portraits/men/32.jpg" alt="patientimg" />
                <div id="informations">
                    <div className="informations-static">
                        <span>Name:</span>
                        <span>Email:</span>
                        <span>Gender:</span>
                        <span>Birth:</span>
                        <span>Telephone:</span>
                        <span>Nationality:</span>
                        <span>Address:</span>
                        <span>ID:</span>
                    </div>
                    <div className="informations-patient">
                        <span>Nicolas Gomes Guadagno</span>
                        <span>nicolasguadagno@gmail.com</span>
                        <span>Male</span>
                        <span>23/09/2002</span>
                        <span>+55 21 965729349</span>
                        <span>BR</span>
                        <span>Rua D, 56, Vila Margarida Reis</span>
                        <span>00000000001</span>
                    </div>
                </div>
            </Container>
        </Modal>
    ) 
}