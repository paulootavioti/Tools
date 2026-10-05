import { Perguntas } from "../components/sections/Perguntas";
import { Case } from "../components/sections/Case";
import { CtaFinal } from "../components/sections/CtaFinal";
import { Ecossistema } from "../components/sections/Ecossistema";
import { Hero } from "../components/sections/Hero";
import { Metodo } from "../components/sections/Metodo";
import { Problemas } from "../components/sections/Problemas";
import { Sobre } from "../components/sections/Sobre";
import { Solucoes } from "../components/sections/Solucoes";
import { site } from "../content/site";
import { useSeo } from "../lib/seo";

export default function Home() {
  useSeo(site.seo.home);
  return (
    <>
      <Hero />
      <Problemas />
      <Solucoes />
      <Metodo />
      <Ecossistema />
      <Case />
      <Sobre />
      <Perguntas />
      <CtaFinal />
    </>
  );
}
