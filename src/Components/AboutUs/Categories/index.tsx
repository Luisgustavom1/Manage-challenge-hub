import React, { ReactNode } from "react";

import "./styles.scss";

interface ICategoriesTitle {
  number: number;
  title: string;
}

interface ICategories extends ICategoriesTitle {
  children: ReactNode;
}

function CategoriesTitle({ number, title }: ICategoriesTitle) {
  return (
    <span className="container-title">
      <div className="title-number">{String(number).padStart(2, "0")}</div>
      <h4 className="title">{title}</h4>
    </span>
  );
}

function Categories({ number, title, children }: ICategories) {
  return (
    <div className="container-categorie">
      <CategoriesTitle number={number} title={title} />
      <p className="body-md text">{children}</p>
    </div>
  );
}

export default Categories;
