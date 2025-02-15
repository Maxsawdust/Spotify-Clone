import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import gangnamStyle from "../../assets/gangnam-style.mp3";
import CircleButton from "../CircleButton/CircleButton";
import shuffleIcon from "../../assets/shuffle-icon.png";
import "./Player.css";

const shuffle = (
  <CircleButton src={shuffleIcon} bgCol="black" id="shuffle-button" />
);

export default function Player() {
  return (
    // using AudioPlayer from react-h5-audio-player
    <AudioPlayer
      src={gangnamStyle}
      // This prop puts the player controls on top of the playback bar
      layout="stacked-reverse"
      customControlsSection={[shuffle, "MAIN_CONTROLS", "LOOP"]}
      // This prop puts the time either side of the bar
      customProgressBarSection={["CURRENT_TIME", "PROGRESS_BAR", "DURATION"]}
      className="custom-player"
    />
  );
}
