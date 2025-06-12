import { Link } from "react-router-dom";
import Button from "../component/Button";
import Hero from "../component/Hero";
import KnowMe from "../component/KnowMe";
import Work from "../component/Work";
import { HeightProvider } from "../context/context";
import {skill, Works } from "../utils/util";



const Feed = () => {
  return (
    <HeightProvider>
      <main className="m-auto">
        <section className="m-auto max-w-[1000px] relative">
          <Hero />
        </section>
        <section className=" max-w-[1000px] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className=" text-start text-4xl text-white-1 font-semibold max-lg:text-3xl max-sm:text-2xl">
              Selected Work
            </h1>
            <ul className="flex flex-col gap-10 p-3">
              {Works.map((value , index) => {
                if(index <= 2){
                  return <Work value={value} extendStyle={`sticky`}  key={index} />;
                }
              })}
            </ul>
          </div>
        </section>
        <section className=" max-w-[1000px] m-auto mt-14">
          <h1 className=" text-start text-4xl text-white-1 font-semibold max-lg:text-3xl max-sm:text-2xl">
            Get to know about me
          </h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full  mt-5 p-3 max-md:grid-cols-1 max-md:grid-rows-4">
            {skill.map((value, index) => {
              return <KnowMe value={value} index={index} key={index}/>;
            })}
            <div className="map rounded-3xl relative z-0">
              <div className="rounded-full -z-10 bg-white-3 absolute size-24 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 "></div>

              <div className="rounded-full bg-white-3 absolute size-24 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 animate-pinga -z-50 bg-gradient-to-r origin-bottom-right
               from-white-3 to-white-3 "></div>
              <img
                src="/Portofolio/imogi.png"
                width={100}
                className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0"
              />
            </div>
          </div>
        </section>
        <section className=" mt-14  m-auto max-w-[1000px] flex flex-row justify-between items-center max-md:flex-col max-md:gap-3">
          <div className="flex flex-col gap-4 max-md:justify-center max-md:items-center">
            <h1 className="text-white-1 text-4xl text-start font-semibold max-lg:text-3xl max-sm:text-2xl">
              Let work together
            </h1>
            <p className=" text-left text-white-3 text-lg   max-md:text-center">
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
          </div>
          <Button>
            <img src="/Portofolio/Vector.png" width={20} />
            <Link to="/contact">
              <span className=" text-white-1">get in touch</span>
            </Link>
          </Button>
        </section>
      </main>
    </HeightProvider>
  );
}

export default Feed