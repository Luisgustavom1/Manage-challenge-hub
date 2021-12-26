import React, { ReactNode } from 'react';

import './styles.scss';
interface ICategoriesTitle {
  number: number;
  title: string;
}

interface ICategories extends ICategoriesTitle {
  children: ReactNode
}

const CategoriesTitle = ({ number, title }: ICategoriesTitle) => {
  return (
    <span className='container-title'>
      <div className='title-number'>{String(number).padStart(2, '0')}</div>
      <h5 className='title-text'>{title}</h5>
    </span>
  )
}

const Categories = ({ number, title, children }: ICategories) => {
  return (
    <div className='categorie'>
      <CategoriesTitle
        number={number}
        title={title}
      />
      <p className="body-lg">{children}</p>
    </div>
  );
}

export default Categories;