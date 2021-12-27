import React from "react";

import shanai from "../../Assets/images/avatar-shanai.png";
import anisha from "../../Assets/images/avatar-anisha.png";
import ali from "../../Assets/images/avatar-ali.png";
import richard from "../../Assets/images/avatar-richard.png";
import Swipper from "../Swipper";
import CardsDepositions from "./CardsDepositions";

import "./styles.scss";

function Depositions() {
  return (
    <section className="container-depositions">
      <h1 className="title-md">What they&apos;ve said</h1>
      <Swipper
        cards={[
          <CardsDepositions
            image={anisha}
            name="Anisha Li"
            text="“Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone motivated.”"
          />,
          <CardsDepositions
            image={ali}
            name="Ali Bravo"
            text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          />,
          <CardsDepositions
            image={richard}
            name="Richard Watts"
            text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
          />,
          <CardsDepositions
            image={shanai}
            name="Richard Watts"
            text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
          />,
        ]}
      />
    </section>
  );
}

export default Depositions;
