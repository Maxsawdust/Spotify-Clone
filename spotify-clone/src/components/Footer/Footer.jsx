import currentSongCover from "../../assets/song-cover.png"
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="currently-playing">
        <img src={currentSongCover} alt="" id="current-song-cover"/>
        <div id="current-song-info">
          <p id="current-song-title">Gangnam Style</p>
          <p id="current-song-author">PSY</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
}
