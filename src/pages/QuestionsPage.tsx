import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import courseData from "../components/CourseData";
import { Question } from "../components/CourseData";
import MCQQuestion from "../components/MCQQuestion";
import background from "../assets/images/profilePic.jpg";
function QuestionsPage() {
  const { courseCode, unitId, levelId } = useParams<{
    courseCode: string;
    unitId: string;
    levelId: string;
  }>();

  // Convert unitId and levelId to numbers
  const unitIdNumber = parseInt(unitId!, 10);
  const levelIdNumber = parseInt(levelId!, 10);

  //Testing Stuff

  const course = courseData[courseCode!];
  const unit = course.units.find((unit) => unit.unitId === unitIdNumber);
  const level = unit!.levels.find((level) => level.levelId === levelIdNumber);
  const questions: Question[] = level!.questions;

  // State to manage current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle next question
  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  //Handle Next Click
  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    }
  };

  return (
    <div className="questions-page">
      <div className="questions-list">
        {currentQuestionIndex < questions.length && (
          <div
            key={questions[currentQuestionIndex].questionId}
            className="question"
          >
            <MCQQuestion
              question={questions[currentQuestionIndex].questionText}
              questionNo={questions[currentQuestionIndex].questionId}
              choice1={questions[currentQuestionIndex].choices[0]}
              choice2={questions[currentQuestionIndex].choices[1]}
              choice3={questions[currentQuestionIndex].choices[2]}
              choice4={questions[currentQuestionIndex].choices[3]}
              onNext={nextQuestion} // Pass nextQuestion function to MCQQuestion component
            />
          </div>
        )}

        {currentQuestionIndex >= questions.length && (
          <div className="question">
            <p>No more questions.</p>
          </div>
        )}
      </div>
      <div className="question-right-graphics">
        <div className="power-ups">P</div>
        <div className="mascot">
          <img width={200} height={200} src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
