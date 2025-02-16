// using the faker.js library to generate random song names
import { faker } from "@faker-js/faker";
import "./Library.css";

export default function Library() {
  // function to generate random songs
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

  return (
    <ul id="library">
      {libraryArr.map((entry) => {
        return (
          <li className="library-entry" key={entry.title}>
            <img className="song-cover-image" src={entry.coverUrl} />
            <div className="song-info">
              <span className="song-title">{entry.title}</span>
              <span className="song-artist">{entry.artist}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
