import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import "./Resizable.css";

/* Spotify has a resizable panel on the left of the webpage. To implement 
   this, I researched the react-resizable-panels library */

export default function Resizable() {
  return (
    <PanelGroup
      className="PanelGroup"
      autoSaveId="persistence"
      direction="horizontal"
    >
      <Panel className="Panel" defaultSize={21.2} maxSize={21.2} minSize={13.5}>
        <LeftPanel />
      </Panel>
      <PanelResizeHandle />
      <Panel className="Panel" minSize={30}>
        <RightPanel />
      </Panel>
    </PanelGroup>
  );
}
