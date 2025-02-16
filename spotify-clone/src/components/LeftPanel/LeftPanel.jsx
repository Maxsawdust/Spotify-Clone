import CircleButton from "../CircleButton/CircleButton";
import ArrowSlides from "../ArrowSlides/ArrowSlides";
import Library from "../Library/Library";
import collapseIcon from "../../assets/collapse-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import rightArrow from "../../assets/right-arrow.png";
import searchIcon from "../../assets/search-icon.png";
import queueIcon from "../../assets/queue-icon.png";
import "./LeftPanel.css";

export default function LeftPanel() {
  // This array is to render buttons in the left panel
  const values = [
    "Playlists",
    "Artists",
    "Albums",
    "Podcasts & Shows",
    "Events",
  ];

  return (
    <nav id="left-panel">
      <div>
        <div id="library-header">
          <a href="/" id="library-header-left">
            <CircleButton
              src={collapseIcon}
              id="collapse-icon"
              bgCol="#121212"
            />
            Your Library
          </a>
          <div id="library-header-right">
            <CircleButton bgCol="#121212" src={plusIcon} />
            <CircleButton bgCol="#121212" src={rightArrow} />
          </div>
        </div>
        <div id="filter-options">
          <ArrowSlides values={values} />
        </div>
      </div>
      <div id="library-container">
        <div id="library-search">
          <CircleButton
            src={searchIcon}
            bgCol="#121212"
            id="library-search-button"
          />

          <a href="/" id="recents">
            Recents
            <CircleButton src={queueIcon} bgCol="#121212" id="recents-icon" />
          </a>
        </div>
        <Library />
      </div>
    </nav>
  );
}
