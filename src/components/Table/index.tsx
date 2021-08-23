import { Container } from "./styles";

interface HeaderProps {
    onOpenNewPatientModal: () => void;
}

export function Table({ onOpenNewPatientModal }: HeaderProps) {
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
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    <tr onClick={onOpenNewPatientModal}>
                        <td>Nicolas Guadagno</td>
                        <td>Male</td>
                        <td>23/09/2002</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>

    );
}