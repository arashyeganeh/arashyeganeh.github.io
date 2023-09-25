import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import styles from "./style.module.scss";
import personImg from "../../assets/person/arash-yeganeh.png";
import headerBg from "../../assets/background/header-bg.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container flex flex-wrap">
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <h2 className="shape-line">Introduction</h2>
          <h1>
            Arash Yeganeh <br />
            <TypeAnimation
              sequence={[
                "I'm a Front End Web Developer",
                2200,
                "Proficient in React",
                2200,
                "Proficient in TypeScript",
                2200,
                "Proficient in Javascript",
                2200,
              ]}
              wrapper="span"
              speed={180}
              repeat={Infinity}
            />
          </h1>
          <motion.p
            variants={fadeIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            My passion lies in learning and refining systems, with a keen desire
            to contribute meaningfully to the technology community. I am
            actively engaged as a Front-End Web Developer, channeling my efforts
            into this domain to create impactful solutions.
          </motion.p>
        </div>
        {/* <div className="w-3/5 lg:w-1/3 mx-auto mt-8 lg:mt-0 relative z-[1]">
          <img src={personImg} alt="arash-yeganeh" />
          <img src={headerBg} className={styles.bg} alt="" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
