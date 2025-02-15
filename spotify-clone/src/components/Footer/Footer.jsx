import currentSongCover from "../../assets/song-cover.png";
import addCircle from "../../assets/add-circle.png";
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
        <CircleButton />
        <CircleButton />
        <CircleButton />
        <CircleButton />
        <CircleButton />
        <label id="volume-controls">
          <CircleButton />
          <Slider />
        </label>
        <CircleButton />
        <CircleButton />
      </div>
    </footer>
  );
}
