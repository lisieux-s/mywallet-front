import { Container, Date, Value } from './style';
import dayjs from 'dayjs';

export default function Entry(props) {
    const formattedTime = dayjs(props.time).format('DD/MM')
  return (
    <Container>
      <div>
        <Date>{formattedTime}</Date>
        <p>{props.description}</p>
      </div>
      <Value type={props.type}>{props.value}</Value>
    </Container>
  );
}
