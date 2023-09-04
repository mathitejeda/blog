import Link from 'next/link';
import styles from './navbar.module.css';

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Blog',
    route: '/blog'
}, {
    label: 'Contact',
    route: '/contact'
}];

function myFunction() {
  var x = getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function Nav() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                {links.map(({ route, label }) => (
                    <li key={route} className={styles.nav_item}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export function Navbar() {
    return (
        <header>
            <Nav />
        </header>
    );
}
