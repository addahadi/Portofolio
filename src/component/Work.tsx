import { WorkProps } from "../utils/type";
import { useHeight } from "../context/context";



const Work = ({value , extendStyle = "" } :WorkProps & {extendStyle? : string}) => {
  const WorkSection = useHeight()
  return (
    <div
      ref={WorkSection}
      className={`flex flex-row  justify-between p-8 rounded-3xl bg-black-2 border-white-3 border-2 overflow-hidden shadow-lg ${extendStyle}
    max-lg:flex-col`}
      style={{ top: value.edge }}
    >
      <div className="flex flex-col gap-5  text-left  lg:max-w-[400px]">
        <img src={value.icon} width={70} height={50} />
        <h1 className=" text-3xl text-white-1 font-bold max-sm:text-xl">
          {value.title}
        </h1>
        <p className=" text-white-2 text-md max-sm:text-sm">{value.desc}</p>
        <a
          className="flex flex-row  items-center gap-2 cursor-pointer hover:underline w-fit text-white-1 
          lg:mt-auto"
          href={value.path}
        >
          <span className=" text-white-1 text-lg max-sm:text-sm">
            Visit Site
          </span>
          <img src="../public/aRight.png" width={20} />
        </a>
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
 