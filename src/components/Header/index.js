import { Container } from './style'
import EXIT from '../../assets/exit.png'

export default function Header(props) {
    return(
        <Container>
            <h1>{props.title}</h1>
            <img src={EXIT} alt='exit' />
        </Container>
    )
}