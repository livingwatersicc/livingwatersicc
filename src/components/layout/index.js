import { Footer } from "components/footer";
import { NavMenu } from "components/nav";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      <main>{children}</main>
      <footer className="bg-primary">
        <Footer />
      </footer>
    </>
  );
};
