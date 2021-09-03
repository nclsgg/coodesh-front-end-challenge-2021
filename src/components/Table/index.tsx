import { useCallback, useState } from "react";
import { Patient } from "../Dashboard";
import { PatientModal } from "../Modal";
import { Container } from "./styles";

type TableProps = {
    patients: Patient[]
  }

export function Table({ patients }: TableProps) {
    const [modalPatient, setModalPatient] = useState<Patient>(Object)
    const [showModal, setShowModal] = useState(false)

    const showPatient = useCallback((patient: Patient) => {
        setModalPatient(patient)
        setShowModal(true)
      }, [])
    

    return (
        <Container>
            {modalPatient && (
            <PatientModal 
            showModal={showModal}
            patient={modalPatient}
            closeModal={() => setShowModal(false)}
            />
            )}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Nationality</th>
                        <th>Birth</th>
                    </tr>
                </thead>

                <tbody>
                    {patients.map(patient => (
                    <tr key={patient.login.uuid} onClick={() => showPatient(patient)}>
                        <td>{patient.name.first} {patient.name.last}</td>
                        <td className="gender">{patient.gender}</td>
                        <td>{patient.nat}</td>
                        <td>{new Date(patient.dob.date).toLocaleDateString()}</td>
                    </tr> 
                    ))}
                </tbody>
            </table>
            
        </Container>

    );
}