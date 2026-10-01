import { useEffect } from "react";

type SeoInput = {
  title: string;
  description: string;
  /** Impede indexação. Use em páginas ainda sem conteúdo final. */
  noindex?: boolean;
};

function setMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Define título e metadados da página atual. Chame uma vez por página. */
export function useSeo({ title, description, noindex = false }: SeoInput): void {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, noindex]);
}
