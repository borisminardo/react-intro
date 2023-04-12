import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//atoms
import MyZodFormBase from "../atoms/MyZodFormBase";
import MyHeader from '../atoms/MyHeader';


function MyZodForm() {


  return (
    <>     
    <Container className="container-width" >
     <MyHeader text="My Zod form in react"></MyHeader>
        <Card body className="mt-3 mb-3" >
          <Row className="row-align-center" >
          <Col xs md="auto">
            <MyZodFormBase></MyZodFormBase>
          </Col>   
          </Row>
        </Card> 
    </Container>
    </>
  )
}

export default MyZodForm