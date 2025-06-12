import { motion } from "framer-motion";

const AnimationCase = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="bg-[linear-gradient(135deg,_#6C63FF,_#6C63FF,_#FFA500)] bg-[length:300%_300%] p-8 rounded-3xl  border border-slate-500/20 hover:shadow-sky-500 transition duration-300 text-white-1 flex flex-col gap-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-3">
        🎞️ Animation Spotlight
        <motion.span
          className="px-2 py-1 bg-sky-700 text-white text-xs rounded animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          Featured
        </motion.span>
      </h2>

      <p>
        This showcase highlights two of my favorite custom-built animations: a
        physics-based <strong>bell animation</strong> using Vector.js and a
        dynamic <strong>sandfall effect</strong> crafted with Three.js and HTML
        Canvas. These animations are designed to be both performant and visually
        expressive.
      </p>

      <ul className="list-disc list-inside text-white-1 text-sm ml-4">
        <li>Focus on realism, responsiveness</li>
        <li>Victor.js a math library for node js and browser</li>
        <li>HTML Canvas element in html 5 to draw graphics</li>
        <li>Three.js a js 3d library</li>
      </ul>
    </motion.div>
  );
};

export default AnimationCase;
