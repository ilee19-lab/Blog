import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';
import { useAuth } from "../contexts/AuthContext";

function ContactPage() {

  return (
    <div>
        <Header/>
    <h2>Contact Us!</h2>
    <form>
        <input placeholder="Name" className={styles.formClass}></input>
        <input placeholder="Email"  className={styles.formClass} type='email'></input>
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button className={styles.submit}type='submit'>Submit</button>



    </form>
    <Footer/>
    </div>
  );
}

export default ContactPage;