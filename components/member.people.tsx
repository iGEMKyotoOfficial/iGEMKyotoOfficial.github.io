import Image from 'next/image'
import Contain from 'components/container'
import styles from 'src/styles/hero.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'reactstrap'
import member from '@/pages/member'

export default function Frame({ children, subtitle, imageOn = true, src }:
    { children: any; subtitle: any; imageOn?: boolean; src: any }) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {imageOn && (
                            <figure>
                                <Image
                                    src={src}
                                    alt=""
                                    sizes="(min-width: 1152px) 576px, 50vw"
                                    width="250"
                                    height="250"
                                />
                            </figure>
                        )}
                    </Col>
                    <Col>
                        <h1 className='people.name'>{subtitle}</h1>
                        <p>{children}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
