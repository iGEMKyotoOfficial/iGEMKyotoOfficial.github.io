import styles from 'src/styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/dna-3539309.jpg'

export default function Hero({ title, subtitle, imageOn = false }:
  {title:any; subtitle:any; imageOn:any;})
  {
    return (
        <div className={styles.flexContainer}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {imageOn && (
            <figure className={styles.image}>
              <Image 
                src={cube} 
                alt="" 
                layout="responsive"
              />
            </figure>
          )}
        </div>
    )
  }