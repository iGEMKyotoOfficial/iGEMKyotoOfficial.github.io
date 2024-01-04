import Logo from "components/logo";
import Nav from "components/nav";
import styles from "src/styles/header.module.css";

export default function Header() {
  return (
    <header>
      <div
        className={styles.flexContain}
        style={{ position: "fixed", top: 0, right: 0, width: "100%" }}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
