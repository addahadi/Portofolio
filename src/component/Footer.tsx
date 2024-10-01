import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import { useRef } from "react";

const Footer = ({draw}:{draw:any}) => {
    const aboveDev = useRef<HTMLDivElement>(null)
    const handleMouseMove = (event: any , grid : any , huevalue : any) => {
        let prevX = Math.floor((event.offsetX + 1) / 10);
        let prevY = Math.floor((event.offsetY + 1) / 10);
        for(let i = 0 ; i < 2 ; i++){
          for(let j = 0 ; j < 2 ; j++){
            grid[prevX + i][prevY + j] = huevalue;
          }
        }
        };
  return (
    <div ref={aboveDev} className=" relative  mt-10  border-t-2 border-white-3    p-10 ">
      <Canvas
        draw={draw}
        aboveDev={aboveDev}
        handleMouseMove={handleMouseMove}

      />
      <div className=" flex justify-evenly items-center ">
        <div className=" flex flex-col ">
          <div className="flex flex-col flex-1 gap-3 text-white-3 text-sm">
            <img src="../public/logo.png" width={100} />
            <p> thank you for stopping</p>
          </div>
          <p className=" text-white-3 text-sm">
            © 2023 Adda hadi. All Rights Reserved.
          </p>
        </div>
        <div>
          <table>
            <thead>
              <tr className=" text-white-1">
                <th className="text-left">Links</th>
                <th>Elsewhere</th>
              </tr>
            </thead>
            <tbody className=" text-white-4">
              <tr>
                <td>
                  {" "}
                  <Link to="/about">About</Link>
                </td>
                <td>
                  <a href="https://github.com/addahadi">GitHub</a>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link to="/work">Work</Link>
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/adda-missoum">
                    LinkedIn
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/skills">Tech Stack</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/work">Work</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer