import { getRandomInteger } from "@/utils/util";
import { useEffect, useRef } from "react";

let column = 440 / 10;
let row = (window.innerWidth - 10) / 10;

function new_array() {
  let grid: any = [];
  for (let i = 0; i < row; i++) {
    grid[i] = [];
    for (let j = 0; j < column; j++) {
      grid[i][j] = 13;
    }
  }
  return grid;
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
  let ref = useRef<HTMLCanvasElement>(null);
  let grid = new_array();
  let huevalue = 20;
  
  useEffect(()=>{
    for(let i = 0 ; i < column ; i++){
      grid[getRandomInteger(column)][getRandomInteger(column)] = huevalue
    }
  },[])
  function Update() {
    let nextarray = new_array();
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        let state = grid[x][y];
        let RL = 1;
        if (Math.random() < 0.5) {
          RL *= -1;
        }
        if (state != 13) {
          if (grid[x][y + 1] == 13 && y < row - 1) {
            nextarray[x][y + 1] = grid[x][y];
            nextarray[x][y] = 13;
          } else if (
            x > 0 &&
            x < row - 1 &&
            grid[x + RL][y + 1] == 13 &&
            y < column - 1
          ) {
            nextarray[x + RL][y + 1] = grid[x][y];
            nextarray[x][y] = 13;
          } else if (
            x > 0 &&
            x < row - 1 &&
            grid[x - RL][y + 1] == 13 &&
            y < column - 1
          ) {
            nextarray[x - RL][y + 1] = grid[x][y];
            nextarray[x][y] = 13;
          } else {
            nextarray[x][y] = grid[x][y];
          }
        }
      }
    }
    return nextarray;
  }
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (!aboveDev.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animatedFrame: number;
    function render() {
      grid = Update();
      draw(ctx, grid, row, column);
      animatedFrame = window.requestAnimationFrame(render);
    }

    render();
    aboveDev.current.addEventListener("mousemove", (event) => {
      handleMouseMove(event, grid, huevalue);
    });
    return () => {
      window.cancelAnimationFrame(animatedFrame);
      aboveDev.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [draw]);
  return (
    <>
      <canvas
        ref={ref}
        className=" m-auto absolute top-0 left-0 -z-40"
        height={440}
        width={window.innerWidth - 20}
      ></canvas>
    </>
  );
}
export default Canvas;
