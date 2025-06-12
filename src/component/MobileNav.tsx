import { Link } from "react-router-dom";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { NavBarItems, svgies } from "@/utils/util";

const MobileNav = () => {
  
  return (
    <section>
      <Sheet>
          <SheetTrigger>
          <img
            src="/Portofolio/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-1 pb-10 pl-4"
          >
            <h1 className="text-xl font-bold text-white-1 ml-2">Hi 👋</h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <nav className="flex h-full flex-col gap-6 text-white-1">
              {NavBarItems.map((value, index) => (
                <Link to={value.path} key={index}>
                  <SheetClose asChild>
                    <div className="flex   gap-4 items-center w-15  py-4 active:bg-black-5 h-auto">
                      <img src={svgies[index]} width={30} />
                      <span className="text-white-4 font-bold flex-1">
                        {value.title}
                      </span>
                    </div>
                  </SheetClose>
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
