import { useState } from "react";
import "./App.css";
import Video from "./pages/video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app_videos">
          <Video
            likes={100}
            messages={200}
            shares={300}
            name="naty_dev"
            description="Recife lindo de viver"
            music="Frevo"
            url="https://v3.cdnpk.net/videvo_files/video/premium/partners0133/large_watermarked/BB_f1db64fb-f7c8-4575-ae04-f675104330af_FPpreview.mp4"
          />
          <Video
            likes={150}
            messages={250}
            shares={370}
            name="naty_dev"
            description="Gatinho"
            music="Música feliz"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
          />
        </div>
      </div>
    </>
  );
}

export default App;
