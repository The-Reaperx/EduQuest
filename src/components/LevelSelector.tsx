import { useState } from "react";

interface Props {
  levels: number;
}

function LevelSelector({ levels }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="levels-container">
      <div className="levels-container-internal">
        {Array.from({ length: levels }, (_, index) => (
          <div
            key={index}
            className={`numbers ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
