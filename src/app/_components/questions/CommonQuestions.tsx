import React from "react";
import classes from "./Questions.module.scss";

const CommonQuestions: React.FC<{}> = () => {
  return (
    <div className="flex-1">
      <div className={`w-fit ${classes.stickyTitle}`}>
        <p>Common questions:</p>
      </div>
    </div>
  );
};

export default CommonQuestions;
