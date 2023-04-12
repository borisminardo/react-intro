import Alert from 'react-bootstrap/Alert';

function MyAlert(props: any) {

  return props.variant && (
    <Alert key={props.variant} variant={props.variant}>
    {props.text}
  </Alert>
  );

}

export default MyAlert;