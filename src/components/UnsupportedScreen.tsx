import EduquestLogo from "../assets/EduquestLogo";

const UnsupportedScreen = () => {
  return (
    <div className="unsupported-screen">
      <div className="unsupported-image">
        <EduquestLogo />
      </div>
      <p>The Application is only visible on a Laptop resolution or higher</p>
    </div>
  );
};

export default UnsupportedScreen;
