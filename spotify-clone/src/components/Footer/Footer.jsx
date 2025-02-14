import currentSongCover from "../../assets/song-cover.png";
import addCircle from "../../assets/add-circle.png";
import CircleButton from "../CircleButton/CircleButton";
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
        <div>top bit</div>
        <div>bottom bit</div>
      </div>
      <div id="additional-controls">I'm some end stuff</div>
    </footer>
  );
}
