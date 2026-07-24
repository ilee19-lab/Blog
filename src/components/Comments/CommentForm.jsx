import React, { useState } from 'react';
import styles from './Comments.module.css';
import { useAuth } from '../../contexts/AuthContext';

function CommentForm({addComment}){
    const[name, setName] = useState('');
    const[message, setMessage] = useState('');
    const { isLoggedIn } = useAuth();
    

    const handleSubmit = (event) =>{
    event.preventDefault();

    const newComment={
        author: name,
        message: message,
        date: new Date().toLocaleDateString()

    }

    addComment(newComment);

    setName('');
    setMessage('');

};
if(!isLoggedIn){
    return <div>
    <p className={styles.loggedOutMessage}>You must be logged in to leave a comment.</p>
    <a href="/LogIn"><button className={styles.logInComments} >Log In</button></a>
</div>
}
 

return(

    <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Comments</h2>
        <input type='text' placeholder="Name" value={name} onChange={(event)=> setName(event.target.value)}></input>
        <textarea name="comment" id="comment" rows="5" cols="80" placeholder="Add a comment" value={message} onChange={(event)=> setMessage(event.target.value)}></textarea>
        <input className={styles.submitBtn}type="submit" value="Submit"/>
    </form>



);

}




export default CommentForm;