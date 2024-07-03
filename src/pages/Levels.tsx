import React from "react";
import ActiveLevel from "../assets/ActiveLevel";
import LevelSelector from "../components/LevelSelector";
import Unit from "../components/Unit";
import { Link, useParams } from "react-router-dom";

const courseData: { [key: string]: { title: string; text: string }[] } = {
  "CPCS 211": [
    { title: "UNIT 1", text: "FUNDAMENTALS OF ARRAYS" },
    { title: "UNIT 2", text: "MULTI-DIMENSIONAL ARRAYS" },
    { title: "UNIT 3", text: "OBJECT ORIENTED PROGRAMMING" },
  ],
  "CPCS 203": [
    { title: "UNIT 1", text: "INTRODUCTION TO ALGORITHMS" },
    { title: "UNIT 2", text: "SORTING ALGORITHMS" },
    { title: "UNIT 3", text: "SEARCHING ALGORITHMS" },
    { title: "UNIT 4", text: "ADVANCED ALGORITHMS" },
    { title: "UNIT 5", text: "ADVANCED ALGORITHMS II" },
    { title: "UNIT 6", text: "FUTURE OF ALGORITHMS" },
  ],
  "MATH 202": [
    { title: "UNIT 1", text: "INTRODUCTION TO DATA STRUCTURES" },
    { title: "UNIT 2", text: "LINKED LISTS" },
    { title: "UNIT 3", text: "TREES AND GRAPHS" },
  ],
};

function Levels() {
  const { courseCode } = useParams<{ courseCode: string }>();
  if (!courseCode || !courseData[courseCode]) {
    // Redirect to a default course or handle the error accordingly
    return <Link to="/default-course" />;
  }

  const units = courseData[courseCode];

  return (
    <div className="levels">
      <div className="units-with-levels">
        {units.map((unit, index) => (
          <React.Fragment key={index}>
            <Unit title={unit.title} text={unit.text} />
            <div className="mini-levels">
              <ActiveLevel level={1} padding={200} active={true} />
              <ActiveLevel level={2} />
              <ActiveLevel level={3} padding={200} />
              <ActiveLevel level={4} />
              <ActiveLevel level={5} padding={200} />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="level-selector">
        <LevelSelector levels={units.length} />
      </div>
    </div>
  );
}

export default Levels;
