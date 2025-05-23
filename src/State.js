import { useState } from 'react';
import { sculptureList } from './Data.js';

export default function Sate() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setIndex(0);
    setFinished(false);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      {finished ? (
        <>
          <h3>The data is covered.</h3>
          <button onClick={handleRestart}>Restart</button>
        </>
      ) : (
        <>
          <button onClick={handleClick}>Next</button>
          <h2>
            <i>{sculpture.name}</i> by {sculpture.artist}
          </h2>
          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
          <img src={sculpture.url} alt={sculpture.alt} />
          <p>{sculpture.description}</p>
        </>
      )}
    </>
  );
}
