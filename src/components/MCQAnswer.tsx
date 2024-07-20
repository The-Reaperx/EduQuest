import { useEffect, useState } from "react";

interface Props {
  letter: string;
  text: string;
  onClick: () => void;
  fill: number;
  right?: string;
  top?: string;
  fontsize?: string;
}

function MCQAnswer({ letter, text, onClick, fill, right, fontsize }: Props) {
  const [fillColor, setFillColor] = useState("#FFFFFF");
  const [secondaryColor, setSecondaryColor] = useState("#8772E4");

  useEffect(() => {
    let newFillColor = "#FFFFFF"; // Default color
    let newSecondaryColor = "#8772E4";

    if (fill === 0) {
      newFillColor = "#ABFFC2"; // Correct choice
      newSecondaryColor = "#30B16D";
    } else if (fill === 1) {
      newFillColor = "#FFD5DA"; // Incorrect choice
      newSecondaryColor = "#DB4343";
    }

    setFillColor(newFillColor);
    setSecondaryColor(newSecondaryColor);
  }, [fill]);

  return (
    <div className="mcq-answers-container" onClick={onClick}>
      <svg
        width="830"
        height="100"
        viewBox="0 0 830 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(0.85)"
        style={{ position: "absolute", right: 60, zIndex: 1 }}
      >
        <path
          d="M3.94165 21.6991L28.7178 3.42627H799.03L825.495 21.6991V74.2334L799.03 96.5034H327.157H28.7178L3.94165 75.3755V21.6991Z"
          fill={fillColor}
        />
        <path
          fill={secondaryColor}
          d="M244.477 99.2753C174.254 99.2753 104.121 99.2753 33.8977 99.3584C29.7617 99.3584 26.255 98.3609 23.0181 95.8671C16.6342 90.9627 10.0704 86.2245 3.41675 81.5695C1.07897 79.907 0 77.9951 0 75.3351C0 58.2943 0 41.1705 0 24.1297C0 21.6359 0.989059 19.6409 3.147 18.0615C10.52 12.7415 17.6232 7.08895 25.266 2.18454C27.7836 0.522029 31.7398 0.189526 34.9767 0.189526C88.7455 0.106401 142.335 0.189526 196.013 0.106401C223.707 0.106401 251.401 -0.0598505 279.094 0.0232752C337.898 0.0232752 737.478 0.106401 796.282 0.106401C800.328 0.106401 803.745 1.02078 806.892 3.43143C813.366 8.41896 820.02 13.1571 826.673 17.8953C828.831 19.4747 830 21.3866 830 23.8803C830 41.0042 830 58.2112 830 75.3351C830 77.8289 828.921 79.7408 826.763 81.3201C819.84 86.2246 813.006 91.2121 806.263 96.2828C803.475 98.3609 800.508 99.109 797.001 99.109C742.873 99.109 347.969 99.109 293.84 99.109C277.296 99.2753 260.932 99.2753 244.477 99.2753ZM244.657 6.34082C226.225 6.42395 207.702 6.42395 189.27 6.42395C137.839 6.42395 86.4078 6.34082 34.9767 6.50707C32.3692 6.50707 29.402 7.67083 27.2441 9.08397C21.7593 12.8246 16.814 17.064 11.509 20.8878C9.3511 22.4672 8.54187 24.1297 8.54187 26.6235C8.63178 42.0017 8.63178 57.38 8.54187 72.7582C8.54187 75.4182 9.62084 77.1639 11.7788 78.6601C15.4653 81.1539 19.6013 83.3152 22.4786 86.4739C27.4239 91.7108 33.1784 93.2902 40.4615 93.2071C95.3093 92.9577 150.247 92.9577 205.095 92.9577C236.475 92.9577 267.765 93.0409 299.145 93.124C318.926 93.124 338.708 93.124 358.489 93.124C389.599 93.124 761.485 93.0409 792.596 93.124C797.181 93.124 801.048 92.0433 804.554 89.2171C809.14 85.3933 813.995 81.8189 818.761 78.3276C820.649 76.9145 821.458 75.3351 821.458 73.0907C821.368 57.7125 821.368 42.3342 821.458 26.956C821.458 24.2128 820.559 22.3841 818.221 20.8047C814.265 18.0615 810.129 15.4015 806.622 12.2427C802.576 8.58521 798.53 6.34082 792.596 6.34082C723.541 6.34082 313.801 6.34082 244.657 6.34082Z"
        />
      </svg>

      <div
        className="mcq-answers "
        style={{ marginRight: right, fontSize: fontsize }}
      >
        <div className="mcq-letter">{`${letter}.`}</div>
        <div className="mcq-answer">{text}</div>
      </div>
    </div>
  );
}

export default MCQAnswer;
