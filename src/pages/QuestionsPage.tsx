import React from "react";
import { Link, useParams } from "react-router-dom";
import courseData from "../components/CourseData";
import { Question } from "../components/CourseData";
import MCQQuestion from "../components/MCQQuestion";

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

  return (
    <div className="questions-page">
      <div className="questions-list">
        {questions.map((question: Question) => (
          <div key={question.questionId} className="question">
            <MCQQuestion
              question={question.questionText}
              questionNo={question.questionId}
              choice1={question.answer}
              choice2={question.answer}
              choice3={question.answer}
              choice4={question.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsPage;
