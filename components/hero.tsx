import styles from 'src/styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/fushimi-inari-shrine-1886975.jpg'
import Container from 'components/container'

export default function Hero({ title, subtitle, imageOn = true }:
  { title: any; subtitle: any; imageOn?: boolean; }) {
  return (
    <div className={styles.flexContainer}>
      <Container large>
        <div className={styles.text} >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && (
          <figure>
            <Image 
              src={cube} 
              alt="" 
              layout="responsive"
              sizes="100vw"
              priority
              placeholder="blur"
              />
          </figure>
        )}
      </Container>
    </div>
  )
}