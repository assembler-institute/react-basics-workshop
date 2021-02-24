import React from "react";

import Posts from "../Posts/Posts";

function Main({ locale, posts }) {
  return (
    <main>
      <Posts locale={locale} posts={posts} />
    </main>
  );
}

export default Main;
