import { Link } from "react-scroll";
import styles from "./style.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="contact-me" className={styles.link} smooth={true}>
        Contact Me
      </Link>
    </nav>
  );
};

export default Nav;
