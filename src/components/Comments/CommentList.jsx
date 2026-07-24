import React from 'react';
import styles from './Comments.module.css';



function CommentList({comments}){
    if(comments.length===0){

        return(
<div className={styles.comments}>
    
    <h2>Existing Comments:</h2>
    <p className={styles.noCommentText}>No comments yet. Be the first to comment!</p>
</div>

        );
    }


return(
    <div className={styles.comments}>
        <h2>Existing Comments: </h2>
        {comments.map((comment, i) => (
            <div key={i} className={styles.comment}>
                <strong>{comment.author}</strong>
                <p>{comment.message}</p>
                <p className={styles.date}>{comment.date}</p>
            </div>
        ))}
    </div>
);

}

export default CommentList;