import { useState, useEffect } from "react";

const GetWindowDims = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const dimensions = () => {
    const isWindow = typeof window !== "undefined";
    const windowW = isWindow ? window.innerWidth : null;
    const windowH = isWindow ? window.innerHeight : null;
    setWidth(windowW);
    setHeight(windowH);
  };

  useEffect(() => {
    dimensions();
  }, [width, height]);

  return { height: height, width: width };
};

export { GetWindowDims };
