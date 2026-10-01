import { site } from "../../content/site";

export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-12 focus:items-center focus:rounded-full focus:bg-copper focus:px-6 focus:font-semibold focus:text-white"
    >
      {site.skipLabel}
    </a>
  );
}
