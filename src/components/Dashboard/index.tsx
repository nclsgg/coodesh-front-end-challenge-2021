import { useState } from "react";
import { PatientModal } from "../Modal";
import { SearchInput } from "../SearchInput";
import { Table } from "../Table";
import { Container } from "./styles";

export function Dashboard() {
    const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false);

    function handleOpenNewPatientModal() {
        setIsNewPatientModalOpen(true);

    }

    function handleCloseNewPatientModal() {
        setIsNewPatientModalOpen(false)

    }

    return (
        <Container>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in vulputate nulla. Nam sed varius augue, eu bibendum mauris.
                Proin tristique magna nec arcu vehicula, nec posuere dolor
                iaculis. Pellentesque turpis nibh, lacinia eget magna vitae,
                tincidunt maximus ligula.
            </span>
            <SearchInput />
            <Table onOpenNewPatientModal={handleOpenNewPatientModal}/>
            <PatientModal isOpen={isNewPatientModalOpen} onRequestClose={handleCloseNewPatientModal}/>
        </Container>
    ); 
}