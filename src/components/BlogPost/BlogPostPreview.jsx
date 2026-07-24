import React from 'react';
import styles from './BlogPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const BlogPostPreview = ({ id, title, preview, author, date }) => {


        const navigate = useNavigate();
    return (
        <div className={styles.post}>
            <h2 className={styles.title}>{title}</h2>
            <p>{preview}</p>
            <p className={styles.info}>{author} • {date}</p>  
            <p className={styles.shareCaption}>Share</p>
            <FontAwesomeIcon className={styles.share} icon={faShare} />
            <button className={styles.viewMore}onClick={() => navigate(`/post/${id}`)}>View More</button>

        </div>
    );

};
export default BlogPostPreview;