import { Button } from "react-bootstrap";
import { InputButton } from "../../Interfaces/MyInputProps";
interface MyProps {
  colore: string;
  titolo: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function MyFormButton(props: MyProps & InputButton) {
  return (
    <Button variant={props.colore} onClick={props.onClick}>
      {props.titolo}
    </Button>
  );
}

export default MyFormButton;
