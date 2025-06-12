import { Link } from "react-router-dom"
import { KnowMeProps } from "../utils/type"
import Loadimg from "./Loadimg";
import LoadTools from "./LoadTools";
import LoadHobbies from "./LoadHobbies";
import cn from "classnames"
import { useRef } from "react";

const KnowMe = ({value,index} : KnowMeProps & {index : number}) => {
  const HobbiesContainer = useRef<HTMLDivElement>(null)  
  return (
    <>
      {value.path ? (
        <Link
          to={value.path}
          id={index === 1 ? "Card" : ""}
          className={cn(
            " rounded-3xl bg-black-2  py-6 flex flex-col gap-5 overflow-hidden   items-center  gap-3py-4 h-[270px] shadow-md shadow-current grow ",
            {
              " col-span-2": !(typeof value.img === "string"),
            }
          )}
        >
          <div id="text" className="flex flex-col gap-3">
            <h1 className=" text-center  text-white-1 text-xl font-bold">
              {value.title}
            </h1>
            <p className=" text-center text-white-3 text-md">{value.desc}</p>
          </div>
          <div
            className={cn("overflow-hidden  w-full flex-1 relative ", {
              "self-start": !(typeof value.img === "string"),
            })}
          >
            {typeof value.img === "string" ? (
              <Loadimg value={value.img} />
            ) : (
              <LoadTools value={value} />
            )}
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            " rounded-3xl bg-black-2  py-6 flex flex-col gap-5 overflow-hidden  items-center  gap-3py-4 h-[270px] shadow-md shadow-current grow ",
            {
              " col-span-2": !(typeof value.img === "string"),
            }
          )}
        >
          <div id="text" className="flex flex-col gap-3">
            <h1 className=" text-center  text-white-1 text-xl font-bold">
              {value.title}
            </h1>
            <p className=" text-center text-white-3 text-md">{value.desc}</p>
          </div>
          <div
            ref={HobbiesContainer}
            className={cn("overflow-hidden  w-full flex-1 relative", {
              "w-max": !(typeof value.img === "string") && !value.img[0].position,
            })}
          >
            <LoadHobbies value={value} HobbiesContainer={HobbiesContainer} />
          </div>
        </div>
      )}
    </>
  );
}

export default KnowMe