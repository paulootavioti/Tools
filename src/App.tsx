import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { legal } from "./content/formulario-e-rodape";
import Diagnostico from "./pages/Diagnostico";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Commercial from "./pages/Commercial";
import Projetos from "./pages/Projetos";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="diagnostico" element={<Diagnostico />} />
        <Route path="solucoes" element={<Commercial kind="service" />} />
        <Route path="solucoes/:slug" element={<Commercial kind="service" />} />
        <Route path="segmentos" element={<Commercial kind="segments" />} />
        <Route path="segmentos/:slug" element={<Commercial kind="segments" />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path={legal.privacidade.path} element={<Legal page="privacidade" />} />
        <Route path={legal.termos.path} element={<Legal page="termos" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
