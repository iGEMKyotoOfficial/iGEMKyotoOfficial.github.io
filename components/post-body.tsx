import styles from "src/styles/post-body.module.css";

export default function PostBody({ children }: { children: any }) {
  return <div className={styles.stack}>{children}</div>;
}
