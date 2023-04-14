import Image from 'next/image'
import Contain from 'components/container'
import styles from 'src/styles/header.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'reactstrap'

function Frame() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="2">
              <span>1 of 3</span>
            </Col>
            <Col md="auto">
              <span>Variable width content</span>
            </Col>
            <Col lg="2">
              <span>3 of 3</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>1 of 3</span>
            </Col>
            <Col md="auto">
              <span>Variable width content</span>
            </Col>
            <Col lg="2">
              <span>3 of 3</span>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Frame;