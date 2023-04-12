
//atom
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function MyHeader(prop : any) {


  return (
    <>
        <Card body >
          <Row className="row-align-center" >
          <Col xs md="auto">
           {prop.text}
          </Col>   
          </Row>
        </Card>
    </>
  )
}

export default MyHeader