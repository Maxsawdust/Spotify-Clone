import placeHolderSquare from "../assets/placeholder-square.jpg";
import "../css/CircleButton.css";

export default function CircleButton(props) {
  return (
    <button className="CircleButton">
      <img
        className="CircleButtonImg"
        src={props.src || placeHolderSquare}
        alt={props.alt || ""}
      />
    </button>
  );
}
