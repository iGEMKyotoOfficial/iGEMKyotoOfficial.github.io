import styles from "src/styles/two-column.module.css";

export function TwoColumn({ children }: { children: React.ReactNode }) {
  return <div className={styles.flexContain}>{children}</div>;
}

export function TwoColumnMain({ children }: { children: React.ReactNode }) {
  return <div className={styles.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }: { children: React.ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>;
}
