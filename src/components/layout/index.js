import { Footer } from "components/footer";
import { NavMenu } from "components/nav";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header>
        <NavMenu />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className="bg-dark">
        <Footer />
      </footer>
    </div>
  );
};
