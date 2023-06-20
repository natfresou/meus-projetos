import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "../components/footer/index";
import { VideoSidebar } from "../components/sidebar/index";

export function Video({likes,messages,shares,name,description,music,url}) {

  const videoRef =
    useRef(null); /* O useRef vai servir para referenciar o video*/
  const [play, setPlay] =
    useState(
      false
    ); /* O useState vai servir pra entender se o click no video vai inicia-lo ou pausa-lo.*/

  function handdleStart() {
    if (play == false) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <>
      <div className="video">
        <video
          className="video_player"
          ref={videoRef}
          onclick={handdleStart}
          controls /*serve para sinalizar o play do video, iniciar e dar pause*/
          loop /*serve para reiniciar o video quando ele acabar*/
          src={url}
        ></video>
        < VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        />
        <VideoFooter
        name={name}
        description={description}
        music={music}
        />
      </div>
    </>
  );
}

export default Video;
