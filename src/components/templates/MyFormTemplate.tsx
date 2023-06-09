import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//organisms
import MyFormBox from "../organisms/MyFormBox";
import MyCustomFormBox from "../organisms/MyCustomFormBox";
import MyZodCustomFormBox from "../organisms/MyZodCustomFormBox";

function MyFormTemplate() {
  return (
    <>
      <Container className="content">
        <Row>
          <Col md="auto">
            <MyFormBox />
          </Col>
          <Col md="auto">
            <MyCustomFormBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyFormTemplate;
