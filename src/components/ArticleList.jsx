import Article from "./Article";
import React from "react";


function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} 
        post={post} 
        date={post.date}
        preview={post.preview}/>
      ))}
    </main>
  );
}
export default ArticleList;
