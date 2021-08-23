import { SearchInput } from "../SearchInput";
import { Table } from "../Table";
import { Container } from "./styles";

export function Dashboard() {
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
            <Table />
        </Container>
    ); 
}