import {useNavigate} from "react-router-dom";
import { useState } from "react";

export function SideBarComp() {
  const [show,setShow]= useState(false);
  const navigate=useNavigate();

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
          <a onClick={()=>navigate("/Buttons")} className="collapse-item" href="#">Buttons</a>
          <a onClick={()=>navigate("/Cards")} className="collapse-item" href="#">Cards</a>
        </div>
      </div>
    </li>
  </>);
}
