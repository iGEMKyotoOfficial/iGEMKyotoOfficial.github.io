import Image from 'next/image'
import Contain from 'components/container'
import styles from 'src/styles/hero.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'reactstrap'
import member from '@/pages/member'

export default function Frame({ children, subtitle, imageOn = false }:
    { children: any; subtitle: any; imageOn?: boolean; }) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <span>
                            {imageOn && (
                                <figure>
                                    <Image
                                        src={member}
                                        alt=""
                                        layout="responsive"
                                        sizes="(min-width: 1152px) 576px, 50vw"
                                        priority
                                        placeholder="blur"
                                    />
                                </figure>
                            )}
                        </span>
                    </Col>
                    <Col>
                        <span>
                            <h1 className='people.name'>{subtitle}</h1>
                            <p>{children}</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
