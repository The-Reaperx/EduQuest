import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import courseData, { Question } from "../components/CourseData";
import playerIdle from "../assets/animations/player-idle 2.gif";
import EnemyIdle from "../assets/animations/enemy-idle-white-cut.gif";
import PlayerAttack from "../assets/animations/player-attack.gif";
import EnemyAttack from "../assets/animations/enemy-attack.gif";
import EnemyDamaged from "../assets/animations/enemy-damaged.gif";
import PlayerDamaged from "../assets/animations/player-damaged.gif";
import PlayerRocket from "../assets/animations/player-rocket.gif";
import EnemyRocket from "../assets/animations/enemy-rocket.gif";
import AnimatedGif from "../components/AnimatedGif";

import MascotEnd from "../components/MascotEnd";
import BannerEnd from "../components/BannerEnd";
import MiniBannerEnd from "../components/MiniBannerEnd";
import ButtonEnd from "../components/ButtonEnd";
import ChallengerLevelBarLeft from "../components/ChallengerLevelBarLeft";
import ChallengerLevelBarRight from "../components/ChallengerLevelBarRight";
import Lines from "../components/Lines";
import RedProgressBar from "../components/RedProgressBar";
import PurpleProgressBar from "../components/PurpleProgressBar";
import MCQQuestionC from "../components/MCQQuestionC";

function ChallengerMode() {
  const { courseCode, unitId, levelId } = useParams<{
    courseCode: string;
    unitId: string;
    levelId: string;
  }>();

  // Convert unitId and levelId to numbers
  const unitIdNumber = parseInt(unitId!, 10);
  const levelIdNumber = parseInt(levelId!, 10);

  // Fetch course data
  const course = courseData[courseCode!];
  const unit = course.units.find((unit) => unit.unitId === unitIdNumber);
  const level = unit!.levels.find((level) => level.levelId === levelIdNumber);
  const questions: Question[] = level!.questions;

  // State to manage current question index and scores
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [mascotMessage, setMascotMessage] = useState("");
  const [hintCount, setHintCount] = useState(0); // State to count hints
  const [correctChoice, setCorrectChoice] = useState(0);
  const [playerHp, setPlayerHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);

  // State to manage animation states
  const [playerAnimation, setPlayerAnimation] = useState(playerIdle); // Default to playerIdle
  const [enemyAnimation, setEnemyAnimation] = useState(EnemyIdle); // Default to enemyIdle

  // Reference for the mascot popup
  const popupRef = useRef<HTMLDivElement>(null);

  // Function to handle next question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Function to handle answer click
  const handleAnswerClick = (selectedChoice: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctChoice = currentQuestion.answer; // Assuming correctChoice exists in Question type
    setCorrectChoice(currentQuestion.answer);

    if (selectedChoice === correctChoice) {
      setCorrectAnswers((prevCount) => prevCount + 1);
      setPlayerAnimation(PlayerAttack);
      setEnemyAnimation(EnemyDamaged);
      setEnemyHp((prevHp) => Math.max(prevHp - 40, 0)); // Decrease enemy HP

      setTimeout(() => {
        nextQuestion();
        setPlayerAnimation(playerIdle);
        setEnemyAnimation(EnemyIdle);
      }, 2000);
    } else {
      setWrongAnswers((prevCount) => prevCount + 1);

      setPlayerAnimation(PlayerDamaged);
      setEnemyAnimation(EnemyAttack);
      setPlayerHp((prevHp) => Math.max(prevHp - 20, 0)); // Decrease player HP

      setTimeout(() => {
        nextQuestion(); // Move to the next question after 3 seconds
        setPlayerAnimation(playerIdle);
        setEnemyAnimation(EnemyIdle);
      }, 2000);
    }
  };

  // Check game end conditions when playerHp or enemyHp reaches 0
  useEffect(() => {
    if (playerHp === 0 || enemyHp === 0) {
      // Implement your game-end logic here, such as showing a game-over screen or redirecting
      console.log("Game Over!");
      // Example of redirecting to a game-over route
      // history.push("/game-over");
    }
  }, [playerHp, enemyHp]);

  // Referencing
  const questionBannerRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (questionBannerRef.current) {
      questionBannerRef.current.style.left = "210px";
    }
  }, [currentQuestionIndex]);

  const mcqQuestionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mcqQuestionRef.current) {
      mcqQuestionRef.current.style.left = "210px";
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (questionBannerRef.current) {
      questionBannerRef.current.style.left = "210px";
    }
  }, [currentQuestionIndex]);

  // Update mascot emotion and message when scores change
  useEffect(() => {
    // Change mascot message after 6 seconds (assuming 6000 milliseconds)
    const timer = setTimeout(() => {
      setMascotMessage(questions[currentQuestionIndex].hint); // Update mascot message to the hint text

      setHintCount((prevCount) => prevCount + 1); // Increment hint count
    }, 15000);

    // Clear timeouts on component unmount or when scores change
    return () => {
      clearTimeout(timer);
    };
  }, [correctAnswers, wrongAnswers]);

  // Calculations
  const progressRate = Math.floor(
    (correctAnswers / (correctAnswers + wrongAnswers)) * 100
  );

  /// Adjust the position of the popup based on the message length
  useEffect(() => {
    if (popupRef.current) {
      const popupHeight = popupRef.current.offsetHeight;
      const mascotMessageLength = mascotMessage.length;

      // Example condition to adjust based on message length
      if (mascotMessageLength > 50) {
        popupRef.current.style.top = "-40px"; // Move higher if message is long
      } else {
        popupRef.current.style.top = "20px"; // Default position
      }
    }
  }, [mascotMessage]);

  return (
    <div className="challenger-mode">
      <Lines />
      <ChallengerLevelBarLeft />
      <ChallengerLevelBarRight />
      <div className="enemy-bar">
        <RedProgressBar progress={enemyHp} />
      </div>
      <div className="player-bar">
        <PurpleProgressBar progress={playerHp} />
      </div>

      {/* Conditional rendering of animations */}
      {currentQuestionIndex < questions.length && (
        <>
          <div
            className="player-idle"
            style={{ position: "absolute", top: 180, left: 150 }}
          >
            <AnimatedGif src={playerAnimation} width={200} />
          </div>

          <div
            className="enemy-idle"
            style={{ position: "absolute", top: 210, right: 150 }}
          >
            <AnimatedGif src={enemyAnimation} width={150} />
          </div>
        </>
      )}

      <div className="questions-page">
        <div className="questions-list">
          {currentQuestionIndex < questions.length ? (
            <div
              key={questions[currentQuestionIndex].questionId}
              className="question"
            >
              <MCQQuestionC
                question={questions[currentQuestionIndex].questionText}
                questionNo={questions[currentQuestionIndex].questionId}
                choice1={questions[currentQuestionIndex].choices[0]}
                choice2={questions[currentQuestionIndex].choices[1]}
                choice3={questions[currentQuestionIndex].choices[2]}
                choice4={questions[currentQuestionIndex].choices[3]}
                onNext={nextQuestion} // Pass nextQuestion function to MCQQuestion component
                onAnswerClick={handleAnswerClick} // Pass handleAnswerClick function to MCQQuestion component
                correctChoice={correctChoice}
                questionBannerRef={questionBannerRef}
                mcqQuestionRef={mcqQuestionRef}
              />
            </div>
          ) : (
            <div
              className="question"
              style={{ position: "absolute", right: 1075 }}
            >
              <MascotEnd progressRate={progressRate} />
              <BannerEnd
                correctAnswers={correctAnswers}
                wrongAnswers={wrongAnswers}
                xp={1280}
              />

              <ButtonEnd />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChallengerMode;
