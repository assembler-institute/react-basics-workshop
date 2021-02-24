import React from "react";
import Button from "../Button/Button";
import ContentsHeader from "../ContentsHeader/ContentsHeader";
import PageHeader from "../PageHeader/PageHeader";

import Main from "./Main/Main";

function PropDrilling({ toggleLocale, locale, posts }) {
  return (
    <div className="container mt-5">
      <PageHeader title="using prop drilling 😢" />
      <header className="row row-cols-2 mb-3">
        <div className="col">
          <ContentsHeader locale={locale} />
        </div>
        <div className="col ml-auto d-flex">
          <Button toggleLocale={toggleLocale} />
        </div>
      </header>
      <Main locale={locale} posts={posts} />
    </div>
  );
}

export default PropDrilling;
