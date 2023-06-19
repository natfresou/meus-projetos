import React, { useRef, useState } from "react";
import "./video.css";

export function Video() {
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
          src="https://v3.cdnpk.net/videvo_files/video/premium/partners0133/large_watermarked/BB_f1db64fb-f7c8-4575-ae04-f675104330af_FPpreview.mp4"
        ></video>
      </div>
    </>
  );
}

export default Video;
