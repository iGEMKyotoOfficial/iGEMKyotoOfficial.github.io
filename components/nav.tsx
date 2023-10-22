import { useState } from "react";
import Link from "next/link";
import styles from "src/styles/nav.module.css";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  // close the nav when a link is clicked
  const closeNav = () => {
    setNavIsOpen(false);
  };

  const pageLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "活動紹介" },
    { href: "/member", label: "メンバー" },
    { href: "/finance", label: "協賛・寄付" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        {pageLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={closeNav}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
