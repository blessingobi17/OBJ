import { useState, useEffect } from "react";

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: projectsRef, id: "projects" },
        { ref: contactRef, id: "contact" },
      ];

      sections.forEach(({ ref, id }) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="lg:px-24 px-8 lg:py-6 py-8 text-white bg-Background
     flex  justify-between items-center sticky top-0 z-50"
    >
      <div>
        <a href="" className="text-2xl font-bold font-Spartan">
          O B J.
        </a>
      </div>
      <div
        className="lg:hidden block cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <img
          src={
            isOpen
              ? "/assets/images/icon-close.svg"
              : "/assets/images/icon-hamburger.svg"
          }
          alt=""
        />
      </div>
      <ul
        className={
          isOpen
            ? "text-lg flex flex-col gap-10 absolute left-0 top-24 bg-Background w-full px-8 py-6 h-navList"
            : "lg:flex gap-6 text-sm hidden"
        }
      >
        <li
          onClick={() => scrollToSection(homeRef)}
          className={`relative navLink cursor-pointer ${
            activeSection === "home" ? "text-Yellow" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection(aboutRef)}
          className={`relative navLink cursor-pointer ${
            activeSection === "about" ? "text-Yellow" : ""
          }`}
        >
          About
        </li>
        <li
          onClick={() => scrollToSection(projectsRef)}
          className={`relative navLink cursor-pointer ${
            activeSection === "projects" ? "text-Yellow" : ""
          }`}
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection(contactRef)}
          className={`relative navLink cursor-pointer ${
            activeSection === "contact" ? "text-Yellow" : ""
          }`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
