import type { ProductStatus } from "../../content/produtos";

const styles: Record<ProductStatus, string> = {
  operacao: "bg-live-bg text-live-text",
  desenvolvimento: "bg-dev-bg text-dev-text",
  independente: "bg-sand text-ink-soft",
};

type Props = { status: ProductStatus; label: string };

/** O texto sempre aparece: a cor nunca é o único sinal do status. */
export function StatusBadge({ status, label }: Props) {
  return (
    <span className={`mono-label inline-flex self-start rounded-full px-2.5 py-1.5 ${styles[status]}`}>
      {label}
    </span>
  );
}
