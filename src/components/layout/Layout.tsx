import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollManager } from "./ScrollManager";
import { SkipLink } from "./SkipLink";

export function Layout() {
  return (
    <>
      <SkipLink />
      <ScrollManager />
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
