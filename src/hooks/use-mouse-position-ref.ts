
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

    // Add event listener to the container element itself rather than window
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [containerRef]);

  return mousePosition;
}
