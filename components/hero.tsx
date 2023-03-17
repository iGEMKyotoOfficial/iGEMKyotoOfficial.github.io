import styles from 'src/styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/dna-3539309.jpg'
import Container from 'components/container'

export default function Hero({ title, subtitle, imageOn = false }:
  { title: any; subtitle: any; imageOn: any; }) {
  return (
    <div className={styles.flexContainer}>
      <Container large={false}>
        <div className={styles.text} style={{backgroundImage: `url(../images/dna-3539309.jpg)`}}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
      {/* <Container large={true}>
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={cube}
              alt=""
              layout="responsive"
            />
          </figure>
        )}
      </Container> */}
    </div>
  )
}