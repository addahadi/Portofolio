import { div } from "framer-motion/client";

const Loadimg = ({value} : {value : string}) => {
  return( 
  <div className="grid place-content-center">
      <img src={value} width={150} className="   grow" />;
  </div>)
}

export default Loadimg