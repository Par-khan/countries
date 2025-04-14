import { useEffect, useState } from "react";

export function usewindowSize(){
 const [windowSize, setwindowSize] = useState({
    width: window.innerWidth,
    hight: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener('resize', () => {
      setwindowSize({ width: window.innerWidth, hight: window.innerHeight, });
    });
  }, []);

  return windowSize
}