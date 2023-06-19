import { useState } from "react";
import "./App.css";
import Video from "./pages/video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app_videos">
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </>
  );
}

export default App;
