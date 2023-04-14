import { Button, ButtonProps } from "react-bootstrap";
interface MyProps {
  colore: string;
  titolo: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function MyFormButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    MyProps
) {
  return (
    <Button variant={props.colore} onClick={props.onClick}>
      {props.titolo}
    </Button>
  );
}

export default MyFormButton;
