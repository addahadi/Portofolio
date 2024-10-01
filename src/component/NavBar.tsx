
import { Link } from "react-router-dom"
import { NavBarItems, socialMedia } from "../utils/util"


const NavBar = () => {
  return (
    <header className="relative">
      <span className="blur0 absolute -top-6 left-[40%] -translate-x-2/4 "></span>
      <span className="blur1 absolute -top-6 left-2/4 -translate-x-2/4 "></span>
      <span className="blur2 absolute -top-6 left-[60%] -translate-x-2/4 "></span>
      <nav className=" px-2 glassmorphism-black  flex flex-row items-center justify-between max-w-[800px]  m-auto rounded-sm  ">
        <Link to="/" className=" border-r-2 px-2  mr-5">
          <img src="../public/logo.png" width={35} className=" " />
        </Link>
        <ul className="flex flex-1 flex-row gap-4 items-center text-white-4 text-sm py-2">
          {NavBarItems.map((value) => {
            return (
              <Link to={value.path} className=" p-2 hover:text-white-1 transition-colors">
                <h1>{value.title}</h1>
              </Link>
            );
          })}
        </ul>
        <ul className="flex flex-row gap-5">
          {socialMedia.map((value) => {
            return (
              <a href={value.path}>
                <img src={value.icon} width={20} height={15} />
              </a>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar