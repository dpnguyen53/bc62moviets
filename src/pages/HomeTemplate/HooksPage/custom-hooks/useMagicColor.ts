import { useState, useEffect } from "react";

export function useMagicColor() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    // interval
    setInterval(() => {
      // color 0 => 999999
      const newColor = Math.floor(Math.random() * 999999);
      setColor(`#${newColor}`);
    }, 1000);
  }, []);

  return color;
}
