import {motion} from "framer-motion"
const Aicase = () => {
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
      className="bg-[linear-gradient(135deg,_#6C63FF,_#6C63FF,_#FFA500)] bg-[length:300%_300%] p-8 rounded-3xl shadow-md border border-slate-500/20 text-white-1 flex flex-col gap-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-3">
        🧠 How I Use AI in Projects
        <span className="px-2 py-1 bg-blue-700 text-white text-xs rounded animate-pulse">
          AI Showcase
        </span>
      </h2>
      <p>
        One of my featured projects, <strong>StoryGen</strong>, is a
        content-generation tool powered by OpenAI...
      </p>
      <ul className="list-disc list-inside text-white-1 text-sm ml-4">
        <li>OpenAI’s GPT API for real-time storytelling</li>
        <li>ElevenLabs for realistic AI voice narration</li>
        <li>Hugging Face models for text and NLP enhancements</li>
      </ul>
    </motion.div>
  );
};

export default Aicase