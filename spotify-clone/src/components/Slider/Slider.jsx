import { useState } from "react";
import "./Slider.css";

/* I decided to dip my toes into react hooks for this component. This is to have the 
   left of the slider track be a spotify green colour */
export default function Slider() {
  // Destructuring an array with a "progress" variable and a "setProgress" function
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setProgress(value);
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      // calling "handleChange" on change
      onChange={handleChange}
      // updating the CSS "range-progress" variable as the progress variable gets changed
      style={{ "--range-progress": `${progress}%` }}
    />
  );
}
