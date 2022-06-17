import "./App.css";
import React, { useRef, useState } from "react";
import { useOutsideAlerter } from "./helpers/useOutsideAlerter";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import windows from "./assets/windows.png";
import sticky_notes from "./assets/sticky-notes.png";
import search from "./assets/search.png";

function App() {
  const stickyRef = useRef();
  const [stickyNote, openSticky] = useState(false);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();

  const goGithub = () => {
    window.open(
      "https://github.com/ferdezjuani",
      "_blank",
      "noopener, noreferrer"
    );
  };

  const goLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/ferdezjuanignacio/",
      "_blank",
      "noopener, noreferrer"
    );
  };

  useOutsideAlerter(stickyRef, () => openSticky(false));

  return (
    <div className="Desktop">
      <div className="Desktop-icon" onDoubleClick={() => goGithub()}>
        <img src={github} className="Desktop-icon-img" />
        <p>Github</p>
      </div>
      <div className="Desktop-icon" onDoubleClick={() => goLinkedIn()}>
        <img src={linkedin} className="Desktop-icon-img" />
        <p>LinkedIn</p>
      </div>
      <div className="Desktop-icon" onDoubleClick={() => openSticky(true)}>
        <img src={sticky_notes} className="Desktop-icon-img" />
        <p>About Me</p>
      </div>
      {stickyNote && (
        <div className="Desktop-stickyNote" ref={stickyRef}>
          <div className="Desktop-stickyNote-body">
            <p>
              Hi, I'm Juan Ignacio. A simple 24 year old frontend developer. I
              have been working with React for more than two years, which is my
              favorite technology. I invite you to check my social networks on
              the desktop 😁.
            </p>
          </div>
        </div>
      )}
      <footer className="Desktop-footer">
        <div className="Desktop-leftSide">
          <img src={windows} className="Desktop-Windows-icon" />
          <img src={search} className="Desktop-Search-icon" />
        </div>
        <div className="Desktop-rightSide">
          <div className="Desktop-hour">{time}</div>
          <div className="Desktop-date">{date}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
