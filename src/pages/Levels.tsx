import ActiveLevel from "../assets/ActiveLevel";
import LevelSelector from "../components/LevelSelector";
import Unit from "../components/Unit";

function Levels() {
  return (
    <div className="levels">
      <div className="units-with-levels">
        <Unit title="UNIT 1" text="FUNDAMENTALS OF ARRAYS" />
        <div className="mini-levels">
          <ActiveLevel level={1} padding={200} active={true} />
          <ActiveLevel level={2} active={false} />
          <ActiveLevel level={3} padding={200} active={false} />
          <ActiveLevel level={4} active={false} />
          <ActiveLevel level={5} padding={200} active={false} />
        </div>
        <Unit title="UNIT 2" text="MULTI-DIMENSIONAL ARRAYS" />
        <div className="mini-levels">
          <ActiveLevel level={1} padding={200} active={true} />
          <ActiveLevel level={2} active={false} />
          <ActiveLevel level={3} padding={200} active={false} />
          <ActiveLevel level={4} active={false} />
          <ActiveLevel level={5} padding={200} active={false} />
        </div>
        <Unit title="UNIT 3" text="OBJECT ORIENTED PROGRAMMING" />
        <div className="mini-levels">
          <ActiveLevel level={1} padding={200} active={true} />
          <ActiveLevel level={2} active={false} />
          <ActiveLevel level={3} padding={200} active={false} />
          <ActiveLevel level={4} active={false} />
          <ActiveLevel level={5} padding={200} active={false} />
        </div>
      </div>

      <div className="level-selector">
        <LevelSelector />
      </div>
    </div>
  );
}

export default Levels;
