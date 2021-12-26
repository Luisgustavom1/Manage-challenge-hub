import React from 'react';

interface ICategories {
  number: number;
  title: string;
}

const Categories = ({ number, title }: ICategories) => {
  return (
    <section>
      <div>{number}</div>
    </section>
  );
}

export default Categories;