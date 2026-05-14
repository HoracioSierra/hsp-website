import { useEffect, useState } from "react";

function PixelCat() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const pauseEvery = 23000;
    const pauseLength = 3000;

    const interval = setInterval(() => {
      setPaused(true);

      setTimeout(() => {
        setPaused(false);
      }, pauseLength);
    }, pauseEvery);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={paused ? "cat-scene paused" : "cat-scene"}>
      <div className="cat-pet">
        <div className="cat-flip">
          <div className="cat-scale">
            <div className="pixel-cat"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PixelCat;