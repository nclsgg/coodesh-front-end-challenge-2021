import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

interface HeaderProps {
    onOpenNewPatientModal: () => void;
}

interface Patient {
    name: {
        first: string
        last: string
        title: string
      }
    gender: string
    dob: {
        date: Date
    }
}

export function Table({ onOpenNewPatientModal }: HeaderProps) {
    const [ patients, setPatients ] = useState<Patient[]>([]);

    useEffect(() => {
        async function loadPatients() {
          const { data } = await api.get('/?page=1&results=50&seed=ncls')
          const patients = data.results;
          setPatients(patients);
        }   
        loadPatients();
      }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth</th>
                    </tr>
                </thead>

                <tbody>
                    {patients.map(patient => (
                    <tr onClick={onOpenNewPatientModal}>
                        <td>{patient.name.first} {patient.name.last}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.dob.date}</td>
                    </tr> 
                    ))}
                </tbody>
            </table>
        </Container>

    );
}