import MCQAnswer from "./MCQAnswer";
import MCQBanner from "./MCQBanner";

interface Props {
  questionNo: number;
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
}
function MCQQuestion({
  question,
  questionNo,
  choice1,
  choice2,
  choice3,
  choice4,
}: Props) {
  return (
    <div className="mcq-page">
      <MCQBanner question={question} questionNo={questionNo} />
      <MCQAnswer letter="A" text={choice1} />
      <MCQAnswer letter="B" text={choice2} />
      <MCQAnswer letter="C" text={choice3} />
      <MCQAnswer letter="D" text={choice4} />
    </div>
  );
}

export default MCQQuestion;
