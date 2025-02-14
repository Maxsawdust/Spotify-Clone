import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
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
      <Panel className="Panel" defaultSize={30} minSize={20}>
        left
      </Panel>
      <PanelResizeHandle />
      <Panel className="Panel" minSize={30}>
        middle
      </Panel>
    </PanelGroup>
  );
}
