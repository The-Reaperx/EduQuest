import MCQAnswer from "./MCQAnswer";
import MCQBanner from "./MCQBanner";

function MCQQuestion() {
  return (
    <div className="mcq-page">
      <div className="mcq-question-container">
        <MCQBanner />
        <div className="mcq-question">
          Q1. How do you declare an array of Integers in Java?
        </div>
      </div>
      <MCQAnswer letter="A" text="Forget about it" />
      <MCQAnswer letter="B" text="Who needs an array" />
      <MCQAnswer letter="C" text="Alt + F4" />
      <MCQAnswer letter="D" text="None of the Above" />
    </div>
  );
}

export default MCQQuestion;
