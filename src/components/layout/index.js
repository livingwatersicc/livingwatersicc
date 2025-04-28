import { Footer } from "components/footer";
import { NavMenu } from "components/nav";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const Layout = ({ children }) => {
  const ref = useRef();
  const { pathname } = useRouter();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ block: "start" });
    }
  }, [pathname]);

  return (
    <div ref={ref}>
      <NavMenu />
      <main>{children}</main>
      <footer className="bg-primary">
        <Footer />
      </footer>
    </div>
  );
};
