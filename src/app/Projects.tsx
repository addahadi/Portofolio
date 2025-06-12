import Button from "@/component/Button";
import PageHeader from "../component/PageHeader";
import Work from "../component/Work";
import { Works } from "../utils/util";
import { Link } from "react-router-dom";
import { useState } from "react";


import {motion} from "framer-motion" 
import AnimationCase from "@/component/AnimationCase";
import Aicase from "@/component/Aicase";


const Projects = () => {
  
  const [activeCategory , setActiveCategory] = useState("All");
  const categories = ["All", "AI", "Animation", "Web"];



  const filteredWorks = Works.filter((project) =>
    activeCategory === "All" ? true : project.tags.includes(activeCategory)
  );


  const desc = {
    title: "Projects",
    Text: "Projects and ideas I’ve worked on",
  };

  return (
    <PageHeader value={desc}>
      <ul className="flex gap-4 mt-8 mb-14">
        {categories.map((cat) => (
          <motion.li
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`cursor-pointer px-4 py-2 border rounded-full ${
            activeCategory === cat ? "bg-white-1 text-black-1" : "text-white-1"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {cat}
          </motion.li>
        ))}
      </ul>
        {
          activeCategory == "Animation" ? <AnimationCase /> : ""
        }
      
        {
          activeCategory == "AI" ? <Aicase /> : ""
        }
      <ul className="flex flex-col gap-10 py-10">
        {filteredWorks.map((value, index) => {
          return <Work value={value} key={index} />;
        })}
        <div className=" flex  rounded-3xl flex-col justify-center items-center border-4 border-dashed border-black-3 bg-black-4/20 w-full h-[400px]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="/Portofolio/star.png" width={80} />
            <h1 className=" text-2xl font-bold text-white-1">
              YOUR PROJECT GOES HERE
            </h1>
            <p className=" text-white-3">
              Let’s turn your idea into a visual reality
            </p>
          </div>
          <Button Classname=" mt-20">
            <Link to="/contact" className="flex gap-3">
              <img src="/Portofolio/Vector.png" width={20} />
              <div className="text-white-1">Get in Touch</div>
            </Link>
          </Button>
        </div>
      </ul>
    </PageHeader>
  );
}

export default Projects