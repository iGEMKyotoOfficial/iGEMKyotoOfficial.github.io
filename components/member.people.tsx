import Image from 'next/image'
import Contain from 'components/container'
import styles from 'src/styles/header.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'reactstrap'

function Frame() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <span>
                            <figure>
                                
                            </figure>
                        </span>
                    </Col>
                    <Col>
                        <span>

                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Frame;