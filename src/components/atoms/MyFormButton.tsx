import { Button } from 'react-bootstrap';

function MyFormButton(props: any) {

  return (
    <Button variant={props.colore}
            type={props.type}
            onClick={props.onClick}
    >{props.titolo}</Button>
  );

}

export default MyFormButton;