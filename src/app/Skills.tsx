import PageHeader from "../component/PageHeader";
import { TeckStack } from "../utils/util";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allCategories = ["All", ...TeckStack.map((cat) => cat.title)];

const categoryColors: Record<string, string> = {
  Language: "border-blue-500",
  Framework: "border-cyan-500",
  CSS: "border-pink-500",
  "State Manager": "border-purple-500",
  "Version Control": "border-gray-500",
  Design: "border-teal-500",
  Animation: "border-fuchsia-500",
  "Database & Auth": "border-amber-500",
  Communication: "border-indigo-500",
  Browser: "border-lime-500",
  Editor: "border-orange-500",
  Music: "border-green-500",
  "Language Learning": "border-rose-500",
  "Cloud Storage": "border-yellow-500",
  "AI Assistant": "border-emerald-500",
  Documentation: "border-sky-500",
};

const descriptions: Record<string, string> = {
  Typescript:
    "Strongly typed superset of JavaScript I use in most of my React apps.",
  Javascript: "Core scripting language for building interactive front-ends.",
  React: "Powerful UI library I use for building dynamic single-page apps.",
  Firebase: "Used for auth, hosting, and Firestore database.",
  ChatGPT: "My AI assistant for prototyping and writing code.",
  Tailwind: "A utility-first CSS framework I use for styling web app",
  "Material UI": "A utility-first CSS framework",
  mySQL: "relational database management (RDBMS), I use it for building relational databases",
  expressJs:"Backend framework , i use it over nodeJs it make the work easier",
  nodeJs:"cross-platform javascript runtime environment",
  "VS Code" : "powerfull code editor , it is my main code editor"


};

const projects: Record<string, string[]> = {
  Typescript: ["My Portfolio", "Task Manager App"],
  Firebase: ["Document Editor", "Realtime Chat"],
  React: ["All my major apps"],
};

const Skills = () => {
  const desc = {
    title: "Tech Stack",
    Text: "The dev tools, apps, and services I use",
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const filteredCards =
    activeCategory === "All"
      ? TeckStack.flatMap((section) =>
          section.card.map((card) => ({ ...card, category: section.title }))
        )
      : TeckStack.find((section) => section.title === activeCategory)?.card.map(
          (card) => ({ ...card, category: activeCategory })
        ) || [];


  const toggleCard = (name: string) => {
    setActiveCard((prev) => (prev === name ? null : name));
  };

  return (
    <PageHeader value={desc}>
      <main className="py-10 p-3 relative">
        <div className="flex flex-wrap gap-3 mb-10">
          {allCategories.map((category) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveCard(null); // collapse on category change
              }}
              className={`cursor-pointer px-4 py-2 border rounded-full ${
                activeCategory === category
                  ? "bg-white-1 text-black-1"
                  : "text-white-1"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {filteredCards.map((card, i) => {
              const colorClass = categoryColors[card.fam] || "border-white-3";
              const isExpanded = activeCard === card.name;

              return (
                <motion.div
                  key={card.name}
                  onClick={() => toggleCard(card.name)}
                  className={`group cursor-pointer flex flex-col p-4 rounded-3xl bg-black-2 border-2 ${colorClass}
                    hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out`}
                >
                  <div className="flex justify-center mb-3">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={card.icon}
                      width={50}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white-1 text-lg">{card.name}</p>
                    <p className="rounded-full px-3 py-1 text-white-2 text-xs border border-white-3">
                      {card.fam}
                    </p>
                  </div>
                    {isExpanded && (
                      <div
                        className="origin-top mt-4 text-white-3 text-sm bg-black-1 p-3 rounded-xl"
                      >
                        <p>
                          {descriptions[card.name] ||
                            "No description available."}
                        </p>
                        {projects[card.name] && (
                          <div className="mt-2">
                            <p className="text-xs text-white-2 mb-1">
                              Used in:
                            </p>
                            <ul className="flex flex-wrap gap-2 text-xs">
                              {projects[card.name].map((proj) => (
                                <li
                                  key={proj}
                                  className="bg-black-3 px-2 py-1 rounded-full"
                                >
                                  {proj}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  
                </motion.div>
              );
            })}
        </div>
      </main>
    </PageHeader>
  );
};

export default Skills;
