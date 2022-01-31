import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/chat">
          Chat
        </Link>
        <Link className={styles.link} to="/profile">
          Profile
        </Link>
      </nav>
    </div>
  );
}
