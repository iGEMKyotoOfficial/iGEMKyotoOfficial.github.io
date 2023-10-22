import styles from "src/styles/hero.module.css";
import Image from "next/image";
import cube from "images/others/fushimi.jpg";
import Contain from "components/container";

export default function Hero({
  title,
  subtitle,
  imageOn = false,
}: {
  title: any;
  subtitle: any;
  imageOn?: boolean;
}) {
  return (
    <div className={styles.flexContain}>
      <Contain large>
        <div className={styles.text}>
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
      </Contain>
    </div>
  );
}
