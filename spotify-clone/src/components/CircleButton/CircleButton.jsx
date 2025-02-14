import placeHolderSquare from "../../assets/placeholder-square.jpg";
import "./CircleButton.css";

// CircleButton accepts props to manipulate img src, alt, and button backgroundColor
export default function CircleButton(props) {
  return (
    <button
      className="CircleButton"
      style={{ backgroundColor: props.bgCol || "#1f1f1f" }}
      id={props.id || ""}
    >
      <img
        className="CircleButtonImg"
        src={props.src || placeHolderSquare}
        alt={props.alt || ""}
      />
    </button>
  );
}
