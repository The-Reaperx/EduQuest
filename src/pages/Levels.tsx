import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import courseData from "../components/CourseData";
import Lines from "../components/Lines";
import Unit from "../components/Unit";
import ActiveLevel from "../components/ActiveLevel";
import LevelSelector from "../components/LevelSelector";
import { Dropdown } from "react-bootstrap";

function Levels() {
  const { courseCode } = useParams<{ courseCode: string }>();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState("Modes"); // Change the initial state to "Modes"

  if (!courseCode || !courseData[courseCode]) {
    return <Link to="/default-course" />;
  }

  const course = courseData[courseCode];

  const handleLevelClick = (unitId: number, levelId: number) => {
    const path =
      toggle === "challenger"
        ? `/${courseCode}/unit/${unitId}/level/${levelId}/challenger`
        : `/${courseCode}/unit/${unitId}/level/${levelId}/questions`;
    navigate(path);
  };

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) {
      setToggle(eventKey);
    }
  };

  const options = [
    { label: "Classic", value: "Classic" },
    { label: "Challenger", value: "challenger" },
  ];

  return (
    <div className="levels">
      <div
        className="toggle-button"
        style={{ position: "absolute", top: 120, right: 20 }}
      >
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {toggle.charAt(0).toUpperCase() + toggle.slice(1)}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map((option) => (
              <Dropdown.Item key={option.value} eventKey={option.value}>
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="levels-background">
        <Lines />
      </div>
      <div className="units-with-levels">
        {course.units.map((unit) => (
          <div id={`${courseCode}-${unit.unitId}`} key={unit.unitId}>
            <Unit title={`Unit ${unit.unitId}`} text={unit.unitText} />
            <div className="mini-levels">
              {unit.levels.map((level, index) => (
                <div key={level.levelId}>
                  <ActiveLevel
                    level={level.levelId}
                    padding={index % 2 !== 0 ? 0 : 200}
                    active={index === 0 || index === 1}
                    onClick={() => handleLevelClick(unit.unitId, level.levelId)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="level-selector">
        <LevelSelector levels={course.units.length} courseCode={courseCode!} />
      </div>
    </div>
  );
}

export default Levels;
