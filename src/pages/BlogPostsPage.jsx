import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BlogPostPreview from '../components/BlogPost/BlogPostPreview';
import { useAuth } from "../contexts/AuthContext";
import styles from './Pages.module.css';

function BlogPostsPage() {

      const blogContent = [
    {
        id: 1,
      title: 'Is Your Dog Happy? 15 Signs of a Happy Dog',
      preview: 'This is the preview of my first blog post...',
      author: 'Imani Lee',
      date: '2026-07-17'
      
    }, 
        {
            id: 2,
      title: 'How to Camp like a Pro: Tips for Camping from a Professional',
      preview: 'This is the preview of my second blog post..',
      author: 'John Doe',
      date: '2025-10-01'
      
    }
];

  return (
    <div>
    <Header/>
    <h2>Blog List</h2>
    <BlogPostPreview id={blogContent[0].id} title={blogContent[0].title} preview={blogContent[0].preview} author={blogContent[0].author} date={blogContent[0].date}/>
    <BlogPostPreview id={blogContent[1].id} title={blogContent[1].title} preview={blogContent[1].preview} author={blogContent[1].author} date={blogContent[1].date}/>  
    <Footer/>
    </div>
  );
  
}

export default BlogPostsPage;