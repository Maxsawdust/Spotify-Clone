import CircleButton from "./CircleButton";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <CircleButton />

      <div>
        <CircleButton />
        <div id="search-bar">
          <input type="text" id="search-song" />
        </div>
      </div>

      <div>
        <div id="install-div">
          <a href=""></a>
        </div>
        <div id="notification-div">
          <button></button>
        </div>
        <CircleButton />
      </div>
    </header>
  );
}
