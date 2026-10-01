type Variant = "hero" | "cta";

/** Colunas de baixo para cima. O último item da última coluna é o módulo de destaque. */
const heroColumns: string[][] = [
  ["bg-mod-grafite"],
  ["bg-mod-laranja", "bg-mod-magenta"],
  ["bg-mod-azul", "bg-mod-roxo", "bg-mod-amarelo"],
  ["bg-mod-grafite", "bg-mod-laranja", "bg-mod-azul", "bg-copper"],
];

const ctaColumns: string[][] = [
  ["bg-mod-grafite"],
  ["bg-mod-laranja", "bg-mod-magenta"],
  ["bg-mod-azul", "bg-mod-roxo", "bg-mod-amarelo"],
  ["bg-mod-magenta", "bg-mod-laranja", "bg-mod-azul", "bg-copper-light"],
];

/** Pontos da linha de conexão (centro do bloco mais alto de cada coluna), em 0–432. */
const linePoints: Array<[number, number]> = [
  [50, 374],
  [158, 266],
  [266, 158],
  [374, 50],
];

type Props = { variant?: Variant; className?: string };

/** Composição decorativa: blocos em degraus. Não tem texto e não recebe foco. */
export function ModularArt({ variant = "hero", className = "" }: Props) {
  const columns = variant === "hero" ? heroColumns : ctaColumns;
  const path = linePoints.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");

  return (
    <div aria-hidden="true" className={`relative aspect-square ${className}`}>
      {columns.map((column, c) =>
        column.map((color, r) => (
          <div
            key={`${c}-${r}`}
            className={`art-block absolute rounded-[6px] ${color}`}
            style={{
              left: `${c * 25}%`,
              top: `${(3 - r) * 25}%`,
              width: "23.15%",
              height: "23.15%",
              animationDelay: `${c * 80}ms`,
            }}
          />
        )),
      )}
      {variant === "hero" ? (
        <svg viewBox="0 0 432 432" className="absolute inset-0 h-full w-full" fill="none">
          <path d={path} pathLength={1} className="art-line" stroke="#0E3B43" strokeWidth="2" />
          {linePoints.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i === linePoints.length - 1 ? 7 : 6}
              className="art-dot"
              fill={i === linePoints.length - 1 ? "#F5F3EE" : "#0E3B43"}
            />
          ))}
        </svg>
      ) : null}
    </div>
  );
}
