import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../../content/site";
import { Button } from "../ui/Button";

const FOCUSABLE = 'a[href], button:not([disabled])';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Fecha o menu ao navegar.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Com o menu aberto: Esc fecha, Tab circula só dentro do cabeçalho e o resto da página fica inerte.
  useEffect(() => {
    const regions = ["conteudo", "rodape"].map((id) => document.getElementById(id));
    regions.forEach((el) => el?.toggleAttribute("inert", open));
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !headerRef.current) return;
      const items: HTMLElement[] = Array.from(headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      regions.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex min-h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-5 md:px-10 lg:min-h-20 lg:px-20">
        <Link to="/" aria-label="Tools, início" className="flex items-center">
          <img
            src="/img/logo-compacto.png"
            alt="Tools"
            width={245}
            height={134}
            className="h-8 w-auto lg:h-11"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="m-0 flex list-none gap-9 p-0 text-[15px] font-medium">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="underline-offset-8 decoration-2 decoration-copper hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button to={site.cta.to} arrow>
            {site.cta.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-[10px] border-[1.5px] border-petrol text-petrol lg:hidden"
        >
          {open ? (
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-0.5 w-5 bg-petrol" />
              <span className="block h-0.5 w-5 bg-petrol" />
              <span className="block h-0.5 w-5 bg-petrol" />
            </span>
          )}
        </button>
      </div>

      <div
        id="menu-movel"
        hidden={!open}
        className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden"
      >
        <ul className="m-0 flex list-none flex-col p-0">
          {site.nav.map((item) => (
            <li key={item.to} className="border-b border-sand">
              <Link to={item.to} className="flex min-h-12 items-center text-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button to={site.cta.to} arrow block>
            {site.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
