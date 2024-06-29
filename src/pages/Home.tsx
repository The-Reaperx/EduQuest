import { Avatar } from "primereact/avatar";

function Home() {
  return (
    <div className="home">
      <div className="hero">This is the Home Page</div>
      <Avatar
        image="/images/avatar/amyelsner.png"
        size="xlarge"
        shape="circle"
      />
    </div>
  );
}

export default Home;
