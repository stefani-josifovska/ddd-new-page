import React from "react";
import { perks } from "./perks";
import classes from "./Prefooter.module.scss";

const Prefooter: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className={classes.container}>
      <h3>Powerful technological foundation</h3>
      <h2>{title}</h2>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {perks.map((perk) => (
          <div key={perk.title}>
            <h4>{perk.title}</h4>
            <p>{perk.text}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Prefooter;
