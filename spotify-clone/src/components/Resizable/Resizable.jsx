import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CircleButton from "../CircleButton/CircleButton";
import Library from "../Library/Library";
import ArrowSlides from "../ArrowSlides/ArrowSlides";
import collapseIcon from "../../assets/collapse-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import rightArrow from "../../assets/right-arrow.png";
import searchIcon from "../../assets/search-icon.png";
import queueIcon from "../../assets/queue-icon.png";
import "./Resizable.css";
import "./leftPanel.css";

/* Spotify has a resizable panel on the left of the webpage. To implement 
   this, I researched the react-resizable-panels library */

// This array is to render buttons in the left panel
export default function Resizable() {
  const values = [
    "Playlists",
    "Artists",
    "Albums",
    "Podcasts & Shows",
    "Events",
  ];

  return (
    <PanelGroup
      className="PanelGroup"
      autoSaveId="persistence"
      direction="horizontal"
    >
      <Panel className="Panel" defaultSize={21.2} maxSize={21.2} minSize={13.5}>
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
                <CircleButton
                  src={queueIcon}
                  bgCol="#121212"
                  id="recents-icon"
                />
              </a>
            </div>
            <Library />
          </div>
        </nav>
      </Panel>
      <PanelResizeHandle />
      <Panel className="Panel" minSize={30}>
        middle
      </Panel>
    </PanelGroup>
  );
}
