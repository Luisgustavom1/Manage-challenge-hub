import React from "react";
import Button from "../Button";

import "./styles.scss";

function CallActionSection() {
  return (
    <section className="container-call-action">
      <span className="content-call-action">
        <p className="title-lg">Simplify how your team works today.</p>
        <Button color="secondary">Get Started</Button>
      </span>
    </section>
  );
}

export default CallActionSection;
