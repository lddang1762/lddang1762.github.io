import React from "react";
import "./Timeline.scss";
import Rocket from "../../icons/rocketship.svg";
import Earth from "../../icons/earth.svg";

import Items from "./TimelineItems";

export default function Timeline() {
  return (
    <ul className="timeline-wrapper">
      <li className="timeline-item">
        <div className="item-icon">
          <img src={Rocket} alt="item-icon" />
        </div>
        {/* <i>Rocket</i> */}
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
      {/* <li>
        <i>Saturn</i>
      </li>
      <li>
        <i>Mars</i>
      </li>
      <li>
        <i>Asteroid</i>
      </li>
      <li>
        <i>Asteroid2</i>
      </li> */}

      <li className="timeline-item">
        <div className="item-icon">
          <img src={Earth} alt="item-icon" />
        </div>
        {/* <i>Earth</i> */}
      </li>
    </ul>
  );
}
