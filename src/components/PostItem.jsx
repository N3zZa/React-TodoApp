import React from 'react'
import styles from "../scss/app.module.scss"

function PostItem({ post,fontSize,number }) {
  return (
    <>
    <div style={fontSize <= 16 || fontSize >= 50 ? {fontSize: "16px"} : {fontSize: `${fontSize}px`}} className={styles.postItemBlock}>
      {number}<br/>
      {post.text}
    </div>
    </>
  );
}
export default PostItem