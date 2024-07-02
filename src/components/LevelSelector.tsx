import { useState } from "react";

function LevelSelector() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="levels-container">
      <div className="levels-container-internal">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number, index) => (
          <div
            key={index}
            className={`numbers ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
