import { useState } from "react";

export function SideBarComp() {
  const [show,setShow]= useState(false);

  return (<>
    <li className="nav-item">
      <a onClick={() => setShow(!show)} className={show ? "nav-link collapsed" : "nav-link"} href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded={show ? "false" : "true"} aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </a>
      <div id="collapseTwo" className={show ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Components:</h6>
          <a className="collapse-item" href="buttons.html">Buttons</a>
          <a className="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li>
  </>);
}
