import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";

const onSignOut = (email, password) => {
  return firebaseApp.auth().signOut();
};

export function Header({ session }) {
  return (
    <div className={styles.header}>
      <nav>
        <Link className={styles.link} to="/">
          Home
        </Link>
        {!!session && (
          <Link className={styles.link} to="/chat">
            Chat
          </Link>
        )}
        {!!session && (
          <Link className={styles.link} to="/profile">
            Profile
          </Link>
        )}
        {!!session && (
          <Link className={styles.link} to="/gists">
            Gists
          </Link>
        )}
        {!session && (
          <Link className={styles.link} to="/login">
            Login
          </Link>
        )}
        {!session && (
          <Link className={styles.link} to="/sign-up">
            Sign Up
          </Link>
        )}

        {!!session && (
          <button
            className={styles.link}
            onClick={() => {
              onSignOut();
            }}
          >
            Exit
          </button>
        )}
      </nav>
    </div>
  );
}
