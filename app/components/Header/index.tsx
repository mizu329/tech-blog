import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TechBlog</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">
              <span>
                <FaGithub />
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <FaXTwitter />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
