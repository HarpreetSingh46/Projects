import React, { useState } from "react";
import "./app.scss";
import Doc from "./components/Doc";
import Nav from "./components/Nav";
import Github from "./components/Windows/Github";
import Note from "./components/Windows/Note";
import Resume from "./components/Windows/resume";
import Spotify from "./components/Windows/Spotify";
import Cli from "./components/Windows/Cli";
const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      <Doc windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <Github windowName='github'   setwindowsState={setwindowsState} />}
      {windowsState.note && <Note windowName='note'   setwindowsState={setwindowsState} />}
      {windowsState.resume && <Resume windowName='resume'   setwindowsState={setwindowsState} />}
      {windowsState.spotify && <Spotify windowName='spotify'   setwindowsState={setwindowsState} />}
      {windowsState.cli && <Cli windowName='cli'   setwindowsState={setwindowsState} />}
    </main>
  );
};

export default App;
