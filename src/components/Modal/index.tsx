import Modal from "react-modal"
import { Patient } from "../Dashboard"
import { Container } from "./styles"

interface ModalProps {
  closeModal: () => void
  patient: Patient
}

export function PatientModal({ closeModal, patient }: ModalProps) {

  return (
    <Modal
      isOpen={true}
      closeTimeoutMS={300}
      ariaHideApp={false}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <img
          className="react-modal-image"
          src={patient.picture.large}
          alt="patientimg"
        />
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
            <span>
              {patient.name.first} {patient.name.last}
            </span>
            <span>{patient.email}</span>
            <span className="gender">{patient.gender}</span>
            <span>{new Date(patient.dob.date).toLocaleDateString()}</span>
            <span>{patient.phone}</span>
            <span>{patient.nat}</span>
            <span>{patient.location.street.name}, {patient.location.street.number} - {patient.location.city}, {patient.location.state}</span>
            <span>{patient.login.uuid}</span>
          </div>
        </div>
      </Container>
    </Modal>
  )
}
