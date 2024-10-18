import { FaTwitter, FaLinkedin, FaBehance, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ contactRef }) => {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer ref={contactRef} className="w-full lg:px-24 px-8 py-20">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants}
      >
        <section className="text-center text-white">
          <h1 className="md:text-8xl text-7xl text-DarkGrey brightness-header font-Spartan">
            Contact
          </h1>
          <h2 className="md:text-3xl text-xl tracking-widest pb-14 font-bold">
            I'd love to hear from you.
          </h2>
        </section>
        <section className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between text-DarkGrey">
          <article className="lg:w-3/5 w-full">
            <p className="text-lg leading-loose">
              I'd love to connect with you. Feel free to message me if you have
              questions or want to chat about web development, UI/UX design, or
              creating seamless digital experiences.
            </p>
          </article>
          <div className="lg:w-1/3 w-full flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between">
            <div>
              <h6 className="text-white text-xl pb-3">Reach me at</h6>
              <ul className="space-y-2">
                <li>Bjoseph863@gmail.com</li>
                <li>+2348167737064</li>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-xl pb-3">Socials</h6>
              <div className="flex gap-5">
                <a href="https://twitter.com/swavy_xx_" target="blank">
                  <FaTwitter className="cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/blessingobi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="blank"
                >
                  <FaLinkedin className="cursor-pointer" />
                </a>
                <a href="https://www.behance.net/blessingobi17" target="blank">
                  <FaBehance className="cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex lg:flex-row flex-col justify-between gap-6 pt-14">
          <a href="mailto:bjoseph863@gmail.com" className="lg:w-2/4 w-full">
            <button className="w-full bg-Yellow border border-Yellow py-4 text-black">
              Message me
            </button>
          </a>
          <a
            href="/doc/Obi Blessing CV.pdf"
            target="blank"
            className="lg:w-2/4 w-full"
          >
            <button
              className="w-full border border-white py-4 text-white
             hover:bg-white hover:text-black transition duration-500 ease-in-out"
            >
              Get my CV
            </button>
          </a>
        </div>
        <div className="flex justify-end pt-10">
          <button
            className="border border-Yellow text-Yellow cursor-pointer h-12 w-12 flex items-center
           justify-center rounded-full"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
