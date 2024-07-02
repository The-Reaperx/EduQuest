import React from "react";
import ActiveLevel from "../assets/ActiveLevel";
import LevelSelector from "../components/LevelSelector";
import Unit from "../components/Unit";

function Levels() {
  // Array of Unit components
  const units = [
    { title: "UNIT 1", text: "FUNDAMENTALS OF ARRAYS" },
    { title: "UNIT 2", text: "MULTI-DIMENSIONAL ARRAYS" },
    { title: "UNIT 3", text: "OBJECT ORIENTED PROGRAMMING" },
  ];

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
        <LevelSelector levels={3} />
      </div>
    </div>
  );
}

export default Levels;
