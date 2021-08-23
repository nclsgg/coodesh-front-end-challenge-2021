import { Container, Content } from './styles'
import { BsPerson } from 'react-icons/bs'

export function Header() {
    return (
        <Container>
            <Content>
                <h1>Pharma Inc.</h1>
                <BsPerson  size={40}/>
            </Content>
        </Container>
    )
}