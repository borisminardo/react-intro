import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//atoms
import MyFormBase from "../atoms/MyFormBase";
import MyHeader from '../atoms/MyHeader';
import MyAlert from '../atoms/MyAlert';


function MyForm() {


  return (
    <>     
    <Container className="container-width" >
     <MyHeader text="My form in react"></MyHeader>
        <Card body className="mt-3 mb-3" >
          <Row className="row-align-center" >
          <Col xs md="auto">
            <MyFormBase></MyFormBase>
          </Col>   
          </Row>
        </Card> 
    </Container>
    </>
  )
}

export default MyForm