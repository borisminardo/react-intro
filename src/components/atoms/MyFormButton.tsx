import { Button, ButtonProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface MyProps{
  colore: string
  titolo: string
  onClick: React.MouseEventHandler<HTMLButtonElement> 
}


function MyFormButton(props: BsPrefixRefForwardingComponent<'button', ButtonProps> & MyProps) {

  return (
    <Button variant={props.colore}
            onClick={props.onClick}
    >{props.titolo}</Button>
  );

}

export default MyFormButton;