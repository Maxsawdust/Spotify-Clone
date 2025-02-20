import placeHolderSquare from "../../assets/placeholder-square.jpg";
import "./CircleButton.css";

// CircleButton accepts props to manipulate img src, alt, and button backgroundColor
export default function CircleButton(props) {
  return (
    <button
      className="circle-button"
      style={{ backgroundColor: props.bgCol || "#1f1f1f" }}
      {...(props.id && { id: props.id })}
      {...(props.onClick && { onClick: props.onClick })}
    >
      <img
        className="circle-button-img"
        src={props.src || placeHolderSquare}
        alt={props.alt || ""}
      />
    </button>
  );
}
