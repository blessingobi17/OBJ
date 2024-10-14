import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

const Projects = ({ projectsRef }) => {
  const headerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <main ref={projectsRef} className="w-full lg:px-24 px-8 py-20">
      <section className="text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={headerVariant}
        >
          <h1 className="md:text-8xl text-7xl text-DarkGrey brightness-header font-Spartan">
            Projects
          </h1>
          <h2 className="md:text-3xl text-xl tracking-widest pb-14 font-bold">
            Check out some of my works.
          </h2>
        </motion.div>
      </section>
      <section className="grid md:grid-cols-2 gap-x-8 gap-y-14 w-full ">
        {projects.map((project, index) => (
          <motion.div
            className="w-full"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <div className="border border-VeryDarkGrey h-80">
              <img
                src={project.image}
                alt=""
                className={`h-full w-full ${
                  project.id === 3 ? "object-contain" : "object-fill"
                }`}
              />
            </div>
            <div className="pt-4 text-white">
              <p className="font-Spartan">{project.header}</p>
              <p className="font-light text-DarkGrey pt-2">{project.body}</p>
              <div className="flex gap-3 items-center pt-4">
                <button className="bg-gray-600 px-4 py-1 rounded-md text-sm cursor-default">
                  {project.stack1}
                </button>
                <button
                  className={`bg-gray-600 px-4 py-1 rounded-md text-sm cursor-default ${
                    project.id === 4 ? "hidden" : ""
                  }`}
                >
                  {project.stack2}
                </button>
              </div>
            </div>
            <div className="pt-4 text-white flex gap-4 text-sm">
              <a href="" className="flex items-center gap-1 hover:text-Yellow">
                {project.prompt1} <FaEye />
              </a>
              <a
                href=""
                className={`flex items-center gap-1 hover:text-Yellow ${
                  project.id === 4 ? "hidden" : ""
                }`}
              >
                {project.prompt2} <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
