import Library from "../Library/Library";
import "./RightPanel.css";

export default function RightPanel() {
  return (
    <main>
      <div id="view-filter-buttons">
        <button className="filter-button">All</button>
        <button className="filter-button">Music</button>
        <button className="filter-button">Podcasts</button>
        <button className="filter-button">Audiobook</button>
      </div>
      <div id="main-library-container">
        <Library content="title" />
      </div>
    </main>
  );
}
