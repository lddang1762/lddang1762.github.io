import React from "react";
import "./Orbit.scss";
import Avatar from "../../icons/astronaut.svg";
import ReactIcon from "../../icons/react.svg";
import Typescript from "../../icons/typescript.svg";
import Javascript from "../../icons/javascript.svg";
import NodeJS from "../../icons/nodeJS.svg";
import Git from "../../icons/git.svg";
import HTML from "../../icons/html.svg";
import CSS from "../../icons/css.svg";

export default function Orbit() {
  const ICONS = [ReactIcon, Typescript, Javascript, NodeJS, Git, HTML, CSS];
  return (
    <div>
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <i className="orbit-center__icon fa fa-code">
            <img src={Avatar} className="w-14 h-14 stroke-black" alt={Avatar.toString()} />
          </i>
        </li>
        <li>
          <ul className="orbit-ring">
            {ICONS.map((Icon) => {
              return (
                <li key={Icon.toString()}>
                  <div>
                    <img src={Icon} className="w-12 h-12" alt={Icon.toString()} />
                  </div>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
