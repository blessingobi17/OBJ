import { motion } from "framer-motion";
import services from "../data/services.json";

const Services = ({ servicesRef }) => {
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
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <main ref={servicesRef} className="w-full lg:px-24 px-8 py-20">
      <section className="text-center text-white service">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariant}
        >
          <h1 className="md:text-8xl text-7xl text-DarkGrey brightness-header font-Spartan">
            Services
          </h1>
          <h2 className="md:text-3xl text-xl tracking-widest pb-14 font-bold">
            He's what i can do for you.
          </h2>
        </motion.div>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 text-white">
        {services.map((service, index) => (
          <motion.div
            className="w-full"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <div className="card bg-VeryDarkGrey p-10 hover:bg-Yellow hover:text-black transition duration-500 ease-in-out h-full">
              <h3 className="text-Yellow text-2xl font-light pb-4">
                {service.header}
              </h3>
              <p className="text-md leading-loose">{service.body}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Services;
