import Link from "next/link";
import styles from "./Header.module.css";
import { Suspense } from "react";
import AuthStatus from "./AuthStatus";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Headless WordPress
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <Suspense fallback={null}>
            <AuthStatus />
          </Suspense>
        </ul>
      </nav>
    </header>
  );
}
