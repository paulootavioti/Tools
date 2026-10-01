export type DiagnosticPayload = {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  segmento: string;
  mensagem: string;
  consentimento: boolean;
};

/**
 * Envia o pedido de diagnóstico para o endereço definido em VITE_FORM_ENDPOINT.
 * O endereço vem do ambiente: nenhuma credencial fica no código.
 */
export async function sendDiagnostic(payload: DiagnosticPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (!endpoint) {
    throw new Error("VITE_FORM_ENDPOINT não está configurado.");
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Falha no envio (${response.status}).`);
  }
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
