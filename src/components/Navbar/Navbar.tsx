import styles from './Navbar.module.css';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export function Navbar() {
  return (
    <div className={styles.floatingNavBar}>
      <div className={styles.navHeader}>
        <Link href="/">
          <div className={styles.headerLogo}>
            <img alt="" src="./nav-header-no-text-logo.svg" />
            <b className="pl-[15px]">DDC</b>
          </div>
        </Link>
        <div className={styles.navMenu}>
          <ul className="flex">
            <li><a href="/About">About</a></li>
            <li><a href="/Resources">Resources</a></li>
            <li><a href="/Constitution">Constitution</a></li>
            <li><a href="/Execs">Execs</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
