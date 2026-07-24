import React from 'react';
import styles from './BlogPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';



const BlogPost = ({ id, title, content, author, date, image, imageAlt}) => {
   


    return (
        <div className={styles.post}>
            <h2 className={styles.title}>{title}</h2>
               <img
        className={styles.fitPicture}
        src={image}
        alt={imageAlt}
      />
            <p>{content}</p>
            <p className={styles.info}>{author} • {date}</p>           

        </div>
    );

};

export default BlogPost;
