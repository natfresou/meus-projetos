import React, { useState } from "react";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

export function VideoSidebar({likes,messages,shares}) {
  const [liked, setLiked] = useState(false);
  function handdlelike() {
    setLiked(!liked); //Dessa forma o liked vai mudar par o contrario sempre que houver o click
  }
  return (
    <div className="videoSidebar">
      <div className="videoSidebar_options" onClick={() => handdlelike()}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
