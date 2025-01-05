import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="contact-form">
        <h3>Contact me</h3>
        <form>
          <input type="email" placeholder="Email address" />
          <button type="submit">submit</button>
        </form>
      </div>
      <p className="footer-text">
        @ {new Date().getFullYear()} Mizuki. All right reserved.
      </p>
    </footer>
  );
}
