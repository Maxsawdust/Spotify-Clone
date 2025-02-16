import currentSongCover from "../../assets/song-cover.png";
import addCircle from "../../assets/add-circle.png";
import djIcon from "../../assets/dj-icon.png";
import nowPlaying from "../../assets/now-playing.png";
import micIcon from "../../assets/mic-icon.png";
import queueIcon from "../../assets/queue-icon.png";
import devicesIcon from "../../assets/devices-icon.png";
import volumeIcon from "../../assets/volume-icon.png";
import pipIcon from "../../assets/pip-icon.png";
import expandIcon from "../../assets/expand-icon.png";
import CircleButton from "../CircleButton/CircleButton";
import Player from "../Player/Player";
import Slider from "../Slider/Slider";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="currently-playing">
        <img src={currentSongCover} alt="" id="current-song-cover" />
        <div id="current-song-info">
          <a href="/" id="current-song-title">
            Gangnam Style (강남스타일)
          </a>
          <a href="/" id="current-song-author">
            PSY
          </a>
        </div>
        <CircleButton id="like-song" bgCol="black" src={addCircle} />
      </div>
      <div id="player-controls">
        <div id="playback-bar">
          {/* This Player component isn't entirely accurate to what Spotify looks like, 
              but I thought it would be fun to add playback functionality. */}
          <Player />
        </div>
      </div>
      <div id="additional-controls">
        <CircleButton src={djIcon} bgCol="#0a59b8" id="dj-icon" />
        <CircleButton src={nowPlaying} bgCol="black" />
        <CircleButton src={micIcon} bgCol="black" />
        <CircleButton src={queueIcon} bgCol="black" />
        <CircleButton src={devicesIcon} bgCol="black" />
        <label id="volume-controls">
          <CircleButton src={volumeIcon} bgCol="black" />
          <Slider />
        </label>
        <CircleButton src={pipIcon} bgCol="black" />
        <CircleButton src={expandIcon} bgCol="black" />
      </div>
    </footer>
  );
}
