import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router';
import BlogPost from '../components/BlogPost/BlogPost';
import CommentList from '../components/Comments/CommentList';
import CommentForm from '../components/Comments/CommentForm';
import { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import styles from '../components/BlogPost/BlogPost.module.css';


function IndividualPost() {
const [comments, setComments] = useState([

    {
        author: "Karen ",
        message: " This was a great post!",
        date: "11/01/2025"
        
    },
        {
        author: "Jane ",
        message: " I loved this!",
        date: "12/26/2025"
    
    },
        {
        author: "John ",
        message: " Thanks for sharing!",
        date: "4/15/2026"
        
    }

]);

const addComment= (newComment)=>{
    setComments([...comments, newComment]);
};




            const params = useParams();
            console.log(params);
    
            const blogContent = [
    {
        id: 1,
      title: 'Is Your Dog Happy? 15 Signs of a Happy Dog',
      author: 'Imani Lee',
      date: '2026-07-17',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum.',
      image:"/dogs.jpg",
      imageAlt: "Picture of Dogs"
    }, 
        {
            id: 2,
      title: 'How to Camp like a Pro: Tips for Camping from a Professional',
      author: 'John Doe',
      date: '2025-10-01',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vitae est? Libero ipsam explicabo quibusdam fugiat iure fuga magni obcaecati quidem corporis, illo architecto nesciunt porro soluta repellat magnam rerum.',
      image:"/nature.jpg",
      imageAlt: "Picture of Nature"
      
    }
   
];
 const targetPost = blogContent.find((element) => String(element.id)=== params.post_id);
 if (!targetPost) {
  return (
    <div>
      <Header />
      <p>Post not found.</p>
      <Footer />
    </div>
  );
}

  return (
    <div>
        <Header/>
    
    <div className={styles.postContainer}>
 
        <BlogPost id={targetPost.id} title={targetPost.title} content={targetPost.content} author={targetPost.author} date={targetPost.date} image={targetPost.image} imageAlt={targetPost.imageAlt} />
        <CommentForm addComment={addComment}/>
        <CommentList comments={comments}/>
    
    </div>
    <Footer/>

    </div>

  );
}



export default IndividualPost;