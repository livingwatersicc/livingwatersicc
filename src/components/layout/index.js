import { useEffect, useRef } from "react";

import { useRouter } from "next/router";

import { Footer } from "components/footer";
import { NavMenu } from "components/nav";

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
