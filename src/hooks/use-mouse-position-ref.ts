
import { useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePositionRef(containerRef: React.RefObject<HTMLElement>) {
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return mousePosition;
}
