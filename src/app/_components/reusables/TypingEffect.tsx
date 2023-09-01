"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import classes from "./TypingEffect.module.scss";

const TypingEffect: React.FC = () => {
  const [typingStatus, setTypingStatus] = useState<string>("");

  const text = `{"Invoice": {
    "InvNumber": "INV-1696-2023",
    "InvIssueDate": "2023-03-05",
    "InvAmount": 1200.00,
    "BuyerName": "TailoredSaaS Ltd",
    "BuyerAddress": "Happy street 9",
    "_details": {
    "Items": [ {
    "ItemName": "Flowers",
		"ItemQuantity": 10.00,
		"ItemNetPrice": 100.00,
		"ItemVatRate": 20.00} ] 
  }}}`;

  return (
    <div className={classes.container}>
      <TypeAnimation
        sequence={[
          () => {
            setTypingStatus("Typing...");
          },
          text,
          () => {
            setTypingStatus("Creation.success");
          },
        ]}
        speed={50}
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.8rem",
          flex: 2,
          color: "white",
        }}
      />
      <div className="flex-1">
        <span className={classes.success}>{typingStatus}</span>
      </div>
    </div>
  );
};

export default TypingEffect;
