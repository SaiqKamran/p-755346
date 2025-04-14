
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

    // Track mouse movement on the entire document
    document.addEventListener("mousemove", updateMousePosition);
    
    // Also track mouse over for better responsiveness
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseover", updateMousePosition);
    }
    
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseover", updateMousePosition);
      }
    };
  }, [containerRef]);

  return mousePosition;
}
