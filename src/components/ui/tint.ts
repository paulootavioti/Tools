export type Tint = "magenta" | "laranja" | "amarelo" | "roxo" | "azul" | "grafite";

const order: Tint[] = ["magenta", "laranja", "amarelo", "roxo", "azul", "grafite"];

/** Classes escritas por extenso para o Tailwind encontrá-las. */
export const tintBg: Record<Tint, string> = {
  magenta: "bg-mod-magenta",
  laranja: "bg-mod-laranja",
  amarelo: "bg-mod-amarelo",
  roxo: "bg-mod-roxo",
  azul: "bg-mod-azul",
  grafite: "bg-mod-grafite",
};

export function tintAt(index: number, offset = 0): string {
  return tintBg[order[(index + offset) % order.length]];
}
