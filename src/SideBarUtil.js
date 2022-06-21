import { useState } from "react";

export function SideBarUtil() {
  const [show,setShow]= useState(false);
  return (
    <>
      <li className="nav-item">
        <a onClick={() => setShow(!show)} className={show ? "nav-link collapsed" : "nav-link"} href="#" data-toggle="collapse" data-target="#collapseUtilities"
          aria-expanded={show ? "false" : "true"} aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className={show ? "collapse show" : "collapse"} aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">Colors</a>
            <a className="collapse-item" href="utilities-border.html">Borders</a>
            <a className="collapse-item" href="utilities-animation.html">Animations</a>
            <a className="collapse-item" href="utilities-other.html">Other</a>
          </div>
        </div>
      </li></>);
}
