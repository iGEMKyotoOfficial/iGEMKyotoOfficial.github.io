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
                            <figure style={{position:'relative', width:"250px", height:"250px"}}>
                                <Image
                                    src={src}
                                    alt=""
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </figure>
                        )}
                    </Col>
                    <Col xs='8'>
                        <h1 className='people.name'>{subtitle}</h1>
                        <p>{children}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
