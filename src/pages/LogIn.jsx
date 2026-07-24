import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import styles from './Pages.module.css';

function LogIn() {
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const navigate = useNavigate();

 const{
        setAuthUser,
        setIsLoggedIn

 } = useAuth();

 const handleSubmit = (e) => {
  e.preventDefault();
  if(!email || !password){
    alert("Please fill in both fields.")
    return;

  }
  setIsLoggedIn(true)
  setAuthUser({
    name: email,
  });
  

  console.log("Logged in!")

  navigate("/BlogPostsPage");

 };

  return (
    <div>
    <Header></Header>
    <h2>Log In</h2>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <label htmlFor="email">Username/Email</label>
      <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      <label  htmlFor="password">Password</label>
      <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      <button className={styles.loginScreenbtn}type='submit'>Log In</button>

    </form>
    <Footer></Footer>
    </div>
  )
}

export default LogIn;