import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, para }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{para}</p>
      </div>

      <img
        className="block object-center w-full h-full"
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center m-10">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className=" flex justify-center items-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3 content-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            CURRENT PROJECTS
          </div>
          <Project
            title="Project 1"
            para="A modern portfolio created using Next.js and tailwind CSS. It has rich animations and elegant feel."
          />
          <Project
            title="Project 2"
            para="A modern portfolio created using React.js and tailwind CSS."
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            para="A food ordering UI created in simple HTML and CSS. The website is modern and responsive."
          />
          <Project
            title="Project 4"
            para="Modern Animated Landing page for a website concept"
          />
          <Project
            title="Project 5"
            para="Covid Feed is a android app written in Kotlin. It shows Covid-19 news all over the world."
          />

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MORE TO COME!
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
