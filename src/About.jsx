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
            , I'm Obi Blessing, a passionate web developer and UI/UX designer.
            I’m enthusiastic about creating seamless user experiences grounded
            in solid design principles. I enjoy working in collaborative
            settings where ideas can flow, and concepts quickly become reality.
            Whether I'm building responsive web applications or enhancing user
            interfaces, my focus is always on delivering high-quality solutions.
            I'd love to connect and discuss how we can bring your next
            project to life. Below are the tools and technologies I work with:
          </p>
        </section>
        <div className="flex flex-wrap lg:gap-0 gap-10 lg:justify-between justify-center w-full pt-10 text-white text-sm font-light">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/react.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/javascript.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/tailwind.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/framer.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Framer Motion</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/swiper.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Swiper JS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/git.png"
              alt=""
              className="h-10 w-10 mb-2"
            />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/images/figma.png" alt="" className="h-10  mb-2" />
            <p>Figma</p>
          </div>
        </div>
        {/* <a href="/doc/Obi Blessing CV.pdf" target="blank">
          <button className="px-8 py-2 rounded-full bg-Yellow text-black font-semibold text-sm mt-4 outline-none">
            Download CV
          </button>
        </a> */}
      </motion.div>
    </main>
  );
};

export default About;
