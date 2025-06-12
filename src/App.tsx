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
  const draw = (
    ctx: CanvasRenderingContext2D,
    grid: number[][],
    row: number,
    column: number
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const cellSize = 10;

    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        const val = grid[x][y];
        if (val !== 13) {
          ctx.fillStyle = `rgb(${val} ${val} ${val})`; // grayscale
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }
  };
  
  return (
    <div className="  m-0 p-0 max-lg:px-4">
      <div className=" max-md:hidden">
        <NavBar />
      </div>
      <div className="flex items-center justify-between md:hidden mb-10">
        <Link to="/">
          <img
            src="/Portofolio/logo.png"
            width={50}
            height={50}
            className="  pt-2"
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
