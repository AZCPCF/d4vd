import { TbBaselineDensityMedium } from "react-icons/tb";
import "./style.css";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <div id="xx">
        <nav>
          <a
            id="drawer"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {!isActive ? <TbBaselineDensityMedium /> : <CgClose />}
          </a>
          <a>overview</a>
          <a>albums</a>
          <a>songs</a>
          <a>images</a>
        </nav>
        <h1>nirvana</h1>
      </div>
      {isActive && (
        <nav id="md-nav">
          <a>overview</a>
          <a>albums</a>
          <a>songs</a>
          <a>images</a>
        </nav>
      )}
    </header>
  );
}
