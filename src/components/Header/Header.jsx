import React from 'react';
import styles from './Header.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router';

function Header() {
  const{isLoggedIn, setIsLoggedIn, setAuthUser} = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
  }
 

  return (
    <header className={styles.header}>
        <h1 className="title">My Blog</h1>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}><Link to="/">Home</Link></li>
        <li className={styles.navListItem}><Link to="/BlogPostsPage">Blogs</Link></li>
        <li className={styles.navListItem}><Link to="/contact">Contact</Link></li>
        <li className={styles.navListItem}>{isLoggedIn ? (
    <button onClick={handleLogout} className={styles.navButton}>
      Log Out
    </button>
  ) : (
    <Link to="/LogIn">Log In</Link>
  )}</li>
      </ul>
    </nav>
    </header>
  );
}
export default Header;