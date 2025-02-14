import CircleButton from "./CircleButton";
import spotifyLogo from "../assets/spotify-logo.png";
import homeIcon from "../assets/home-icon.png";
import profilePic from "../assets/profile-pic.jpg";
import browseIcon from "../assets/browse-icon.png";
import searchIcon from "../assets/search-icon.png";
import notificationsBell from "../assets/notifications-bell.png";
import downloadIcon from "../assets/download-icon.png";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <CircleButton src={spotifyLogo} bgCol="black" />

      <div id="center-header">
        <CircleButton src={homeIcon} alt="home" />
        <div id="search-bar">
          <div className="icon-container">
            <img src={searchIcon} alt="search" id="search-icon" />
          </div>
          <input
            type="text"
            id="search-input"
            placeholder="What do you want to play?"
          />
          <CircleButton src={browseIcon} alt="browse" id="browse-icon" />
        </div>
      </div>

      <div>
        <div id="install-div">
          <a href="/" id="install-link">
            <img src={downloadIcon} alt="donwload app" id="download-icon" />
            <span>Install App</span>
          </a>
        </div>
        <div>
          <CircleButton
            src={notificationsBell}
            alt="notifications"
            bgCol={"black"}
            id="notifications-button"
          />
        </div>
        <CircleButton src={profilePic} alt="view profile" />
      </div>
    </header>
  );
}
