import "../App.css";
import { useState } from "react";

const App = () => {
  const [points, setPoints] = useState([]);
  const [lastRemoved, setLastRemoved] = useState([]);

  console.log(points);

  const clickHandler = (e) => {
    // console.log(e)

    const { pageX, pageY } = e;

    // console.log(pageX, pageY)

    const newPoints = [{ pageX, pageY }];

    // console.log(newPoints)

    setPoints((points) => [...points, newPoints]);

    // console.log(points)
  };

  /*  const pointCSS = (points) => {
    left: `${points.pageX}`,
    top: `${points.pageY}`;
  } */

  const removeLastDot = () => {
    const poppedDot = points.pop();

    // console.log(poppedDot, 'POPPEEED')

    setLastRemoved(poppedDot);

    console.log("last removed: ", lastRemoved);
  };

  const restoreLastDot = () => {
    console.log(lastRemoved.length);
    if (!lastRemoved.length) console.log("ok");
    setPoints((points) => [...points, lastRemoved]);
  };

  return (
    <>
      <div className="buttons">
        <button
          disabled={points.length === 0}
          style={{ zIndex: "100" }}
          onClick={removeLastDot}
        >
          Undo
        </button>
        <button
          disabled={points.length === 0 || lastRemoved.length === 0}
          style={{ zIndex: "100" }}
          onClick={restoreLastDot}
        >
          Redo
        </button>
      </div>
      <div className="App" onClick={(e) => clickHandler(e)}>
        {points.length > 0 &&
          points.map((point, i) => (
            <div
              style={{
                left: `${point[0].pageX}px`,
                top: `${point[0].pageY - 75}px`,
              }}
              className="dot"
              key={i}
            ></div>
          ))}
      </div>
    </>
  );
};

export default App;
