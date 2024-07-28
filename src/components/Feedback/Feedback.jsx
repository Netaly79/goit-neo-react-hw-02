import css from "./Feedback.module.css";

export const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className={css.feedbackBlock}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
