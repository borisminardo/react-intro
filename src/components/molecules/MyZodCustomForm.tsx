import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//atoms
import MyHeader from '../atoms/MyHeader';
import MyZodCustomFormBase from '../atoms/MyZodCustomFormBase';


function MyZodCustomForm() {


  return (
    <>     
    <Container className="container-width" >
     <MyHeader text="My Zod custom form in react"></MyHeader>
        <Card body className="mt-3 mb-3" >
          <Row className="row-align-center" >
          <Col xs md="auto">
            <MyZodCustomFormBase></MyZodCustomFormBase>
          </Col>   
          </Row>
        </Card> 
    </Container>
    </>
  )
}

export default MyZodCustomForm