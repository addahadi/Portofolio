import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {



  return (
    <div className="flex  justify-between  items-center py-[100px]">
      <div className="flex items-start flex-col gap-7 flex-1">
        <h1 className=" text-6xl text-white-1 font-bold  item-self-start max-lg:text-4xl">
          <span className=" text-white-2">Iam</span> Adda Hadi
        </h1>
        <p className=" text-white-3 text-lg  text-start">
          A front-end engineer and a computer science student  helping startups turn their
          visions into a digital reality. I specialize in  building
          modern mobile and web-based apps with different tools 😎.
        </p>
        <div className="flex  gap-4 w-full max-sm:flex-col ">
          <Button Classname="max-sm:w-full">
            <Link to="/about">
              <span className=" text-white-1">see my resume</span>
            </Link>
          </Button>
          <Button Classname="max-sm:w-full">
            <Link to="/contact">
              <span className=" text-white-1">get in touch</span>
            </Link>
          </Button>
        </div>
      </div>
      <img
        src="/Portofolio/adda (2).jpg "
        width={300}
        className=" rounded-lg max-md:hidden"
      />
    </div>
  );
};

export default Hero;
