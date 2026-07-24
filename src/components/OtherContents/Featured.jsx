import React from 'react'
import styles from './Featured.module.css'
import { Link } from 'react-router'

function Featured() {
  return (
    <>
  <h2>Featured</h2>
  <hr className={styles.divider}/> 
    <div className={styles.container}>
    

    <div className={styles.imgOne}>
      <img className="fit-picture"
  src="/dogs.jpg" alt="Picture of dogs"></img>
  <Link to="/BlogPostsPage"><div className={styles.overlay}></div></Link>
  <div className={styles.imgTextOne}>
  <p className={styles.tag}>Pets</p>
  
  <h3 className={styles.title}>Is Your Dog Happy? 15 Signs of a Happy Dog</h3>
  <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
    </div>
    
     </div>
        <div className={styles.imgTwo}>
          
     <Link to="/BlogPostsPage"> <img className="fit-picture"
  src="waterfall.jpg"></img></Link>
  <Link to="/BlogPostsPage"><div className={styles.overlay}></div></Link>
  <div className={styles.imgTextTwo}>
  <p className={styles.tag}>Travel</p>
    <h3 className={styles.title}>Wanderlust Travel: Top 10 Travel Destinations</h3>
  <p className={styles.description} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. </p>
    </div></div>
        <div className={styles.imgThree}>
     <Link to="/BlogPostsPage"> <img className="fit-picture"
  src="/nature.jpg" alt="Picture of nature"></img></Link>
 <Link to="/BlogPostsPage"><div className={styles.overlay}></div></Link>
  <div className={styles.imgTextThree}>
  <p className={styles.tag}>Nature</p>
    <h3 className={styles.title}>How to Camp like a Pro: Tips for Camping from a Professional</h3>
  <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. </p>
    </div></div>

</div>
</>    

  )
}

export default Featured