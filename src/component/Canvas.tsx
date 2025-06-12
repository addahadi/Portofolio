import { getRandomInteger } from "@/utils/util";
import { useEffect, useRef, useState } from "react";

function new_array(columns: number, rows: number) {
  return Array.from({ length: columns }, () => Array(rows).fill(13));
}

function Canvas({
  draw,
  aboveDev,
  handleMouseMove,
}: {
  draw: any;
  aboveDev: React.RefObject<HTMLDivElement>;
  handleMouseMove: any;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const gridRef = useRef<Array<number[]>>([]);
  const huevalue = 20;

  // Resize canvas and initialize grid
  useEffect(() => {
    const updateCanvasSize = () => {
      const container = aboveDev.current;
      const canvas = ref.current;
      if (!container || !canvas) return;

      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      const newRow = Math.floor(width / 10);
      const newColumn = Math.floor(height / 10);

      setRow(newRow);
      setColumn(newColumn);
      gridRef.current = new_array(newRow, newColumn);
    };

    updateCanvasSize();

    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCanvasSize, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [aboveDev]);

  // Seed random particles
  useEffect(() => {
    const newGrid = new_array(row, column);
    const particleCount = Math.floor((row * column) / 4);

    for (let i = 0; i < particleCount; i++) {
      const x = getRandomInteger(row - 1);
      const y = getRandomInteger(column - 1);
      if (newGrid[x] && newGrid[x][y] !== undefined) {
        newGrid[x][y] = huevalue;
      }
    }

    gridRef.current = newGrid;
  }, [row, column]);

  // Sandfall update logic
  function Update() {
    const current = gridRef.current;
    const next = new_array(row, column);

    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        const state = current[x][y];
        if (state !== 13) {
          const RL = Math.random() < 0.5 ? -1 : 1;

          if (y + 1 < column && current[x][y + 1] === 13) {
            next[x][y + 1] = state;
          } else if (
            x + RL >= 0 &&
            x + RL < row &&
            y + 1 < column &&
            current[x + RL][y + 1] === 13
          ) {
            next[x + RL][y + 1] = state;
          } else if (
            x - RL >= 0 &&
            x - RL < row &&
            y + 1 < column &&
            current[x - RL][y + 1] === 13
          ) {
            next[x - RL][y + 1] = state;
          } else {
            next[x][y] = state;
          }
        }
      }
    }

    return next;
  }

  // Animation loop
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const updated = Update();
      gridRef.current = updated;
      draw(ctx, updated, row, column);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [draw, row, column]);

  // Mouse & touch pointer interaction
  useEffect(() => {
    const container = aboveDev.current;
    if (!container) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      handleMouseMove({ offsetX, offsetY }, gridRef.current, huevalue);
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={ref}
      className="absolute top-0 left-0 -z-40 block box-border overflow-x-hidden"
    />
  );
}

export default Canvas;
