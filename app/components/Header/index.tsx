import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TechBlog</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="">
              <span>
                <FaGithub size={24} />
              </span>
            </a>
          </li>
          <li className={styles.li}>
            <a href="">
              <span>
                <FaXTwitter size={24} />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
