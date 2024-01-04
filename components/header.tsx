import Logo from "components/logo";
import Nav from "components/nav";
import styles from "src/styles/header.module.css";

export default function Header() {
  return (
    <header>
      {/* TODO: style={{ position: "fixed", top: 0, right: 0, width: "100%" }} does not work!! */}
      <div className={styles.flexContain}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
