import { Link } from "react-router-dom";
// import Canvas from "./Canvas";
import { useCallback, useRef } from "react";
import Canvas from "./Canvas";

const Footer = ({draw}:{draw:any}) => {
    const aboveDev = useRef<HTMLDivElement>(null)
    const handleMouseMove = useCallback((event : any, grid : any, huevalue : any) => {
      let prevX = Math.floor((event.offsetX + 1) / 10);
      let prevY = Math.floor((event.offsetY + 1) / 10);
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if (grid[prevX + i] && grid[prevX + i][prevY + j] !== undefined) {
            grid[prevX + i][prevY + j] = huevalue;
          }
        }
      }
    }, []);
    
  return (
    <div
      ref={aboveDev}
      className=" relative   mt-10 overflow-hidden  border-t-2 border-white-3  h-[420px]   p-10 flex flex-row justify-evenly items-center max-sm:flex-col "
    >
      <Canvas
        draw={draw}
        aboveDev={aboveDev}
        handleMouseMove={handleMouseMove}
      />
      <div className="flex justify-evenly  items-center">
        <div className=" flex flex-col gap-3 ">
          <div className="flex flex-col flex-1 gap-3 text-white-1 font-thin text-sm">
            <img src="/Portofolio/logo.png" width={150} className=" max-md:w-20" />
            <p> thank you for stopping</p>
          </div>
          <p className=" text-white-1 font-thin text-sm">
            © 2023 Adda hadi. All Rights Reserved.
          </p>
        </div>
      </div>
      <section>
        <div className="flex flex-row gap-8 max-sm:flex-col max-sm:mt-8">
          <div className=" flex flex-col gap-3">
            <div className=" text-white-1  text-xl max-sm:text-lg font-thin">
              Linker
            </div>
            <div className=" flex flex-col gap-3 text-white-1 pl-3 max-sm:flex-row font-thin">
              <div>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <Link to="/skills">Tech Stack</Link>
              </div>
              <div>
                <Link to="/projects">Projects</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" text-white-1 text-xl max-sm:text-lg font-thin">
              EveryWhere
            </div>
            <div className=" flex flex-col gap-3 text-white-1 pl-3 font-thin max-sm:flex-row">
              <div>
                <a href="https://github.com/addahadi">GitHub</a>
              </div>
              {/* Second Row */}
              <div>
                <a href="https://www.linkedin.com/in/adda-missoum">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer


