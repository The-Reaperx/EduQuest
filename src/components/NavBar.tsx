import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div>Menu</div>
        <div>Search Bar</div>
        <div>Create </div>
      </div>
      <div className="navbar-right">
        <div>streak</div>
        <div>profile</div>
      </div>
    </div>
  );
}

export default NavBar;
