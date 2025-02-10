import { motion } from "framer-motion";

const About = ({ aboutRef }) => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <main ref={aboutRef} className="w-full lg:px-24 px-8 py-20">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <section className="text-white">
          <h1 className="md:text-8xl text-7xl text-DarkGrey brightness-header font-Spartan">
            About
          </h1>
          <h2 className="md:text-3xl text-xl tracking-widest pb-8 font-bold">
            Let me introduce myself.
          </h2>
          <p className="font-light text-md leading-loose">
            <span className="tracking-widest font-bold text-Yellow">
              HELLO!
            </span>
            , I’m a Frontend Developer who specialize in creating user-friendly
            interfaces and building responsive web applications that people
            enjoy using. I’m all about solving problems and making digital
            experiences engaging. Let’s create something amazing together. Below
            are the tools and technologies I work with:
          </p>
        </section>
        <div className="flex flex-wrap lg:gap-0 gap-10 lg:justify-between justify-center w-full pt-10 text-white text-sm font-light">
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/react.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/javascript.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/tailwind.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/framer.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Framer Motion</p>
          </div>
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/swiper.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Swiper JS</p>
          </div>
          <div className="flex flex-col items-center stack">
            <img
              src="/assets/images/git.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Git</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
