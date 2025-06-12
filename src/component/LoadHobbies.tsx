import { KnowMeProps } from "../utils/type"
import {motion} from "framer-motion"
const LoadHobbies = ({
  value,
  HobbiesContainer,
}: KnowMeProps & { HobbiesContainer: React.RefObject<HTMLDivElement> }) => {
  return (
    <div>
      {!(typeof value.img === "string") && value.img.map((V, index) => {
        return (
          <motion.div
            drag
            dragConstraints={HobbiesContainer}
            key={index}
            className=" cursor-grab absolute flex gap-2 items-center p-2 rounded-full bg-black-3 w-fit"
            style={{ top: V.position &&  V.position.top, left: V.position &&  V.position.left }}
          >
            <span className="">{V.icon}</span>
            <span className=" text-white-1">{V.title}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LoadHobbies