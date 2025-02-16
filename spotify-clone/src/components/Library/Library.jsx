// using the faker.js library to generate random song names
import { faker } from "@faker-js/faker";
import "./Library.css";

export default function Library(props) {
  // function to generate random songs and random artists
  const generateRandomSong = () => {
    return {
      title: faker.music.songName(),
      artist: faker.music.artist(),
      // using picsum to generate random image
      coverUrl: `https://picsum.photos/300/300?random=${Math.random()}`,
    };
  };

  const libraryArr = [];

  for (let i = 0; i < 50; i++) {
    libraryArr.push(generateRandomSong());
  }

  // content variable for easy access from spans
  const content = props.content || "full";

  return (
    <div
      className="library"
      {...(props.id && { id: props.id })}
      content={content}
    >
      {libraryArr.map((entry, index) => {
        return (
          <div className="library-entry" key={index}>
            <img className="song-cover-image" src={entry.coverUrl} />
            <div className="song-info">
              {/* rendering the content of song info based on the content prop */}
              {(content == "title" || content == "full") && (
                <span className="song-title">{entry.title}</span>
              )}
              {(content == "artist" || content == "full") && (
                <span className="song-artist">{entry.artist}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
