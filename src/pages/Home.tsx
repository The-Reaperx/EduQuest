import BannerCircle from "../assets/BannerCircle";
import Banner from "../components/Banner";
import BannerText from "../components/BannerText";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-title">
          <div className="hero-graphics"></div>
          <div className="hero-title-text">Your Courses</div>
        </div>
        <div className="hero-banners">
          <Banner
            code="CPCS 211"
            course="LOGIC DESIGN"
            rate="87%"
            number={1}
            color="#AAAFE8"
          />
          <Banner
            code="CPCS 203"
            course="COMPUTER SCIENCE"
            rate="57%"
            number={2}
            color="#946a36"
          />
          <Banner
            code="CPCS 203"
            course="COMPUTER SCIENCE"
            rate="57%"
            number={2}
            color="#946a36"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
