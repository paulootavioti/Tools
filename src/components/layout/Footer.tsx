import { Link } from "react-router-dom";
import { contact, site } from "../../content/site";
import { legal, rodape } from "../../content/formulario-e-rodape";

type Item = { label: string; href: string };

const linkClass = "flex min-h-11 items-center gap-1 hover:underline underline-offset-4";

function ExternalList({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {item.label}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </>
  );
}

export function Footer() {
  const social: Item[] = [];
  if (contact.instagramTools) social.push({ label: rodape.labels.instagramTools, href: contact.instagramTools });
  if (contact.instagramPessoal) social.push({ label: rodape.labels.instagramPessoal, href: contact.instagramPessoal });
  if (contact.linkedin) social.push({ label: rodape.labels.linkedin, href: contact.linkedin });
  if (contact.github) social.push({ label: rodape.labels.github, href: contact.github });

  const whatsapp = contact.whatsappNumber ? `https://wa.me/${contact.whatsappNumber}` : null;

  return (
    <footer id="rodape" className="on-dark bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-8 pt-12 md:px-10 lg:px-20 lg:pb-10 lg:pt-[72px]">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3.5">
            <img
              src="/img/logo-compacto-escuro.png"
              alt="Tools"
              width={245}
              height={134}
              className="h-8 w-auto self-start lg:h-11"
            />
            <p className="m-0 font-display text-xl font-semibold">{site.name}</p>
            <p className="m-0 text-[15px] leading-6 text-line">{site.slogan}</p>
          </div>

          <nav aria-label={rodape.paulo}>
            <h2 className="eyebrow m-0 mb-2 text-copper-light">{rodape.paulo}</h2>
            <ul className="m-0 list-none p-0 text-[15px]">
              <ExternalList items={social} />
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow m-0 mb-2 text-copper-light">{rodape.contactTitle}</h2>
            <ul className="m-0 list-none p-0 text-[15px]">
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {rodape.labels.email}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <ExternalList items={[{ label: rodape.labels.whatsapp, href: whatsapp }]} />
              ) : null}
            </ul>
          </div>

          <nav aria-label={rodape.legalTitle}>
            <h2 className="eyebrow m-0 mb-2 text-copper-light">{rodape.legalTitle}</h2>
            <ul className="m-0 list-none p-0 text-[15px]">
              <li>
                <Link to={legal.privacidade.path} className={linkClass}>
                  {legal.privacidade.title}
                </Link>
              </li>
              <li>
                <Link to={legal.termos.path} className={linkClass}>
                  {legal.termos.title}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="m-0 mt-12 border-t border-paper/20 pt-4 text-[13px] text-line">
          © {site.year} {site.name}. {rodape.copyright}
        </p>
      </div>
    </footer>
  );
}
