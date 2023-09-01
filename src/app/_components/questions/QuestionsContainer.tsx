"use client";
import React, { useState } from "react";
import { questions, features, questionsPricing } from "./content";
import classes from "./Questions.module.scss";
import DisplayQuestions from "./DisplayQuestions";
import DisplayImage from "./DisplayImage";
import DisplayFeatures from "./DisplayFeatures";
import CommonQuestions from "./CommonQuestions";

const QuestionsContainer: React.FC<{ page: string }> = ({ page }) => {
  const [chosenQuestion, setChosenQuestion] = useState<number>(0);

  const onChangeIndexHandler = (newIndex: number) =>
    setChosenQuestion(newIndex);

  return (
    <section className={`${classes.container} flex`}>
      {page === "homepage" && <DisplayImage chosenQuestion={chosenQuestion} />}
      {page === "platform" && <DisplayFeatures />}
      {page === "pricing" && <CommonQuestions />}
      <DisplayQuestions
        chosenIndex={chosenQuestion}
        onChooseQuestion={onChangeIndexHandler}
        content={
          page === "homepage"
            ? questions
            : page === "platform"
            ? features
            : questionsPricing
        }
        page={page}
      />
    </section>
  );
};

export default QuestionsContainer;
