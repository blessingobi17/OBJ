const Hero = ({ homeRef }) => {
  return (
    <section
      ref={homeRef}
      className="text-white text-center font-light pt-28 pb-14 hero"
    >
      <h1 className="md:text-lgHero text-8xl tracking-heroSpacing">OBJ.</h1>
      <p className="text-xl">Web Developer & UI/UX Designer</p>
    </section>
  );
};

export default Hero;
