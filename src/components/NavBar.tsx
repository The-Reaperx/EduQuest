import { List } from "react-bootstrap-icons";
import SearchIcon from "../assets/SearchIcon";
import CreateIcon from "../assets/CreateIcon";
import FireIcon from "../assets/FireIcon";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import profileImage from "../assets/images/ProfilePic.png";
import TemplateDemo from "./TemplateDemo";

import SideBarDemo from "./SideBarDemo";

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <SideBarDemo />
          <div className="search-bar">
            <form className="search-form">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <input
                className="search-box"
                type="search"
                placeholder="Search for existing courses"
                aria-label="Search"
              />
            </form>
          </div>
          <button className="navbar-create" onClick={handleShow}>
            <div className="create-icon">
              <CreateIcon />
            </div>
            <div className="create-text">Create</div>
          </button>
        </div>
        <div className="navbar-right">
          <div className="navbar-streak">
            <div className="streak-icon">
              <FireIcon />
            </div>
            <div className="streak-number">5</div>
          </div>
          <div>
            <Avatar image={profileImage} size="xlarge" shape="circle" />
          </div>
        </div>
      </div>

      {/* Modal Structure */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create your Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplateDemo />
        </Modal.Body>
        <Modal.Footer>
          <Button label="Close" severity="secondary" onClick={handleClose} />
          <Button label="Upload PDF" severity="help" onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
