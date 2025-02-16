import { useRef, useState, useEffect } from "react";
import CircleButton from "../CircleButton/CircleButton";
import chevRight from "../../assets/chev-right.png";
import chevLeft from "../../assets/chev-left.png";
import "./ArrowSlides.css";

export default function ArrowSlides(props) {
  // using ref to get the "slides-values" div
  const valueRef = useRef(null);
  // using state to hide/show the arrow buttons
  // left needs to be hidden by default, so set to false
  const [showLeftButton, setShowLeftButton] = useState(false);
  // right needs to be shown by default, so set to true
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    // getting the button container on arrow button click
    const container = valueRef.current;
    const scrollAmount = 2000;

    container.scrollBy({
      // checking the direction argument passed in by the button click
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    const container = valueRef.current;
    if (container) {
      // show left button if not at the start
      setShowLeftButton(container.scrollLeft > 0);

      // show right button if not scrolled to the end
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // using effect to set event listeners on component render
  // empty array so this is only called once
  useEffect(() => {
    // getting the button container on arrow click
    const container = valueRef.current;
    // listening for a scroll event and calling "checkScroll"
    container.addEventListener("scroll", checkScroll);
    // removing the listener when the component is not rendered
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="slides-container">
      {/* rendering button based on boolean */}
      {showLeftButton && (
        <CircleButton onClick={() => scroll("left")} src={chevLeft} />
      )}
      <div ref={valueRef} id="slides-values">
        {/* takes in an array of values, maps through them to render a button */}
        {props.values.map((value) => {
          return (
            <button className="slides-value-button" key={`${value}-button`}>
              {value}
            </button>
          );
        })}
      </div>
      {showRightButton && (
        <CircleButton onClick={() => scroll("right")} src={chevRight} />
      )}
    </div>
  );
}
