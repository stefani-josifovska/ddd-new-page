import React from "react";
import classes from "./Questions.module.scss";

const DisplayFeatures: React.FC<{}> = () => {
  return (
    <div className="flex-1">
      <div className={`w-fit ${classes.stickyTitle}`}>
        <p>
          Features of
          <br />
          DDD Invoices:
        </p>
      </div>
    </div>
  );
};

export default DisplayFeatures;
