import "../App.css";
import { useState } from "react";

const App = () => {
  const [points, setPoints] = useState([]);
  const [lastRemoved, setLastRemoved] = useState([]);

  console.log(points);

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);


  const clickHandler = (e) => {
    // console.log(e)

    const { pageX, pageY } = e;

    // console.log(pageX, pageY)

    const newPoints = [{ pageX, pageY, color: randomColor }];

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
    if (lastRemoved.length > 0) {
        setPoints((points) => [...points, lastRemoved]);

        setLastRemoved([])
    }
  };


//   console.log(randomColor)

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
                background: "#" + point[0].color,
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
