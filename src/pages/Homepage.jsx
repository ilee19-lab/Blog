import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router';
import styles from './Pages.module.css';
import { Search } from "lucide-react";
import Featured from '../components/OtherContents/Featured';

function Homepage() {
const { isLoggedIn } = useAuth();
    
  return (
    <div>
        <Header></Header>
    <h2>Discover Our Latest News!</h2>
    <p className={styles.subtitle}>Welcome to our blog! Discover inspiring stories, travel guides, and everyday adventures.</p>
    <div className={styles.searchBox}>
        <Search className={styles.searchIcon} size={18} /> 
    <input className={styles.searchInput} placeholder='Search'/>
    <button className={styles.findButton}>Find Now</button></div>
    {!isLoggedIn ? (
    <Link to="/LogIn"><button className={styles.logInButton}>
      Log In
    </button></Link>
  ) : (
    <Link to="/BlogPostsPage"><button className={styles.exploreButton}>
      Explore Blog
    </button></Link>
  )}
  <Featured/>
    <Footer></Footer>

    </div>
  )
}

export default Homepage;