import React from "react";

import Post from "../Post/Post";

function Posts({ locale, posts }) {
  return (
    <section className="row row-cols-1">
      {posts.map((post) => (
        <div className="col" key={post.id}>
          <Post locale={locale} post={post} />
        </div>
      ))}
    </section>
  );
}

export default Posts;
