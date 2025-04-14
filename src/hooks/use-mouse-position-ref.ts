
import { useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePositionRef(containerRef: React.RefObject<HTMLElement>) {
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    // Add the event listener to the document instead of window
    document.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, [containerRef]);

  return mousePosition;
}
