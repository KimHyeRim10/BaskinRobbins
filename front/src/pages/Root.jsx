import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
