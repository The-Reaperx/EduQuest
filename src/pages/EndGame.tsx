import BannerEnd from "../components/BannerEnd";
import MascotEnd from "../components/MascotEnd";

function EndGame() {
  return (
    <div className="ending">
      <div className="ending-left">
        <MascotEnd />
      </div>
      <BannerEnd />
    </div>
  );
}

export default EndGame;
