import './App.css'
import NavBar from './component/NavBar'
import About from './app/About';
import Contact from './app/Contact';
import Skills from './app/Skills';
import Feed from './app/Feed';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './app/Projects';
import Footer from './component/Footer';
import MobileNav from './component/MobileNav';

function App() {
   const draw = (ctx:any, grid: any[] , row: number , column : number) => {
    
     for (let x = 0; x <row; x++) {
       for (let y = 0; y <column; y++) {
         ctx.fillStyle = `rgb(${grid[x][y]} ${grid[x][y]} ${
           grid[x][y]
         })`;
         ctx.fillRect(x * 10, y * 10, 10, 10);
       }
     }
   };
  return (
    <div className=" min-h-screen top-0  m-0 p-0 max-md:px-3">
      <div className=" max-md:hidden">
        <NavBar />
      </div>
      <div className="flex items-center justify-between md:hidden mb-10">
        <Link to="/">
          <img
            src="../public/logo.png"
            width={50}
            height={50}
            className=""
          ></img>
        </Link>
        <MobileNav />
      </div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer draw={draw} />
    </div>
  );
}

export default App
