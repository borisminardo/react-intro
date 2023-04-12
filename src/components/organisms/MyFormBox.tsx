import { Container } from "react-bootstrap";
//molecules
import MyForm from "../molecules/MyForm";


function MyFormBox() {
	return (
        <>
        <Container className="content">
           <MyForm></MyForm>
        </Container>
        </>
	);
}


export default MyFormBox;