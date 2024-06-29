import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { List } from "react-bootstrap-icons";

const SidebarDemo = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  const customIcons = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  );

  return (
    <div>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <h4>Home</h4>
        <h4>Create</h4>
        <h4>Profile</h4>
      </Sidebar>

      <List
        className="navbar-menu"
        color="white"
        size={45}
        onClick={() => setVisibleLeft(true)}
      />
    </div>
  );
};

export default SidebarDemo;
