import React from "react";
import classes from "./Questions.module.scss";
import { questions } from "./content";

const DisplayImage: React.FC<{ chosenQuestion: number }> = ({
  chosenQuestion,
}) => {
  return (
    <div className={`flex-1 ${classes.imgContainer}`}>
      <div
        style={{
          backgroundImage: `url(${questions[chosenQuestion].image.src})`,
        }}
      >
        {questions[chosenQuestion].hints.map((hint, index) => (
          <div
            key={`hint-${index}`}
            className="absolute"
            style={{ top: hint.positionY, left: hint.positionX }}
          >
            {hint.content.map((item, itemIndex) => (
              <p key={`hint-${index}-${itemIndex}`}>+</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
