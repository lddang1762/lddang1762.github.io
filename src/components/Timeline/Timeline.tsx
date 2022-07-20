import React, { useState } from "react";
import "./Timeline.scss";
import Rocket from "../../icons/rocketship.svg";
import Earth from "../../icons/earth.svg";

import Items from "./TimelineItems";

export default function Timeline() {
  const [animating, setAnimating] = useState(false);

  return (
    <ul className="timeline-wrapper">
      <li className="timeline-item">
        <div className="item-icon">
          <img src={Rocket} alt="item-icon" />
        </div>
      </li>

      {Items.map((item) => (
        <li key={item.title} className="timeline-item">
          <div className="item-icon">
            <img src={item.icon} alt="item-icon" />
          </div>
          <div>
            <div className="item-title">{item.title}</div>
            <div className="item-date">{item.date}</div>
            <ul className="item-body">
              {item.body.map((bulletPt, i) => (
                <li key={i}>{bulletPt}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}

      <li className="timeline-item">
        <div className="item-icon">
          <img src={Earth} alt="item-icon" />
        </div>
        <a href="/LucDang_Resume_FrontEnd.pdf" download>
          <button
            className={`download ${animating ? "animating" : ""}`}
            onClick={() => setAnimating(true)}
            onAnimationEnd={() => setAnimating(false)}
          >
            Download CV
          </button>
        </a>
      </li>
    </ul>
  );
}
