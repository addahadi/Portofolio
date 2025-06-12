import { WorkProps } from "../utils/type";
import { useHeight } from "../context/context";
import { Github } from "lucide-react";
const Work = ({value , extendStyle = "" } :WorkProps & {extendStyle? : string}) => {
  const WorkSection = useHeight()
  return (
    <div
      ref={WorkSection}
      className={`flex flex-row  justify-between p-8 rounded-3xl bg-black-2   border-white-3 border-2 overflow-hidden shadow-lg ${extendStyle}
    max-lg:flex-col transition-transform duration-300 hover:scale-[1.02] `}
      style={{ top: value.edge }}
    >
      <div className="flex flex-col gap-5  text-left  lg:max-w-[400px]">
        <img src={value.icon} width={70} height={50} />
        <h1 className="text-3xl text-white-1 font-bold flex items-center gap-3">
          {value.title}
          {value.tags?.includes("AI") && (
            <span className="px-2 py-1 bg-blue-700 text-white text-xs rounded animate-pulse">
              🤖 AI
            </span>
          )}
          {value.tags?.includes("Animation") && (
            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded animate-pulse">
              🎞️ Animation
            </span>
          )}
        </h1>
        <p className=" text-white-2 text-md max-sm:text-sm">{value.desc}</p>
        <div className="flex flex-row items-center gap-4 mt-auto flex-wrap">
          <a
            className="flex items-center gap-2 cursor-pointer hover:underline text-white-1 text-lg max-sm:text-sm"
            href={value.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Site</span>
            <img src="/Portofolio/aRight.png" width={20} />
          </a>

          {value.github && (
            <a
              className="flex items-center gap-2 cursor-pointer hover:underline text-white-1 text-lg max-sm:text-sm"
              href={value.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <Github size='20' />
            </a>
          )}
        </div>
      </div>
      <div className=" max-lg:flex justify-center items-center">
        <img
          src={typeof value.img === "string" ? value.img : ""}
          width={2000}
          className="shrink min-w-[100px]  max-lg:rotate-0 -mb-[20%]"
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}

export default Work
 