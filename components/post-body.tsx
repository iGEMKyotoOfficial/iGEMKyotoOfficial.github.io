import styles from "src/styles/post-body.module.css";

export default function PostBody({ children }: { children: React.ReactNode }) {
  return <div className={styles.stack}>{children}</div>;
}
