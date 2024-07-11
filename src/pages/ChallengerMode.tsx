import ChallengerLevelBarLeft from "../components/ChallengerLevelBarLeft";
import ChallengerLevelBarRight from "../components/ChallengerLevelBarRight";
import Lines from "../components/Lines";
import RedProgressBar from "../components/RedProgressBar";
import PurpleProgressBar from "../components/PurpleProgressBar";

function ChallengerMode() {
  return (
    <div className="challenger-mode">
      <Lines />
      <ChallengerLevelBarLeft />
      <ChallengerLevelBarRight />
      <div className="enemy-bar">
        <RedProgressBar />
      </div>
      <div className="player-bar">
        <PurpleProgressBar />
      </div>
    </div>
  );
}

export default ChallengerMode;
