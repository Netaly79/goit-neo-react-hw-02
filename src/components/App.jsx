import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storedData = window.localStorage.getItem("feedback");

    if (storedData !== null) {
      return JSON.parse(storedData);
    } else
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="container">
      <Description></Description>
      <Options
        options={feedback}
        onLeaveFeedback={updateFeedback}
        total={totalFeedback}
        onResetFeedback={resetFeedback}
      />
      {totalFeedback != 0 && (
        <Feedback feedback={feedback} total={totalFeedback} positive={positive}/>
      )}
      {totalFeedback == 0 && <Notification />}
    </div>
  );
}

export default App;
