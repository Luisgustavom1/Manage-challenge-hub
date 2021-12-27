import React from "react";

import "./styles.scss";

interface ICardsDepositions {
  text: string;
  name: string;
  image: string;
}

function CardsDepositions({
  text,
  name,
  image,
}: ICardsDepositions): JSX.Element {
  return (
    <div className="container-cards">
      <img src={image} alt={`Avatar of ${name}`} />
      <div>
        <h2 className="title-sm">{name}</h2>
        <p className="body-md">{text}</p>
      </div>
    </div>
  );
}
export default CardsDepositions;
