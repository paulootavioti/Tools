import { useId, useRef, useState, type FormEvent } from "react";
import { diagnostico } from "../content/formulario-e-rodape";
import { legal } from "../content/formulario-e-rodape";
import { contact } from "../content/site";
import { isValidEmail, sendDiagnostic } from "../lib/form";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"nome" | "email" | "consentimento", string>>;

const fieldBase =
  "min-h-12 w-full rounded-lg border-[1.5px] bg-white px-3.5 text-base text-ink aria-[invalid=true]:border-2 aria-[invalid=true]:border-danger";
const fieldOk = "border-muted focus:border-petrol-600";

export function DiagnosticForm() {
  const f = diagnostico.fields;
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const whatsapp = contact.whatsappNumber ? `https://wa.me/${contact.whatsappNumber}` : null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form || status === "sending") return;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "").trim();

    // Campo oculto contra robôs: pessoas não o preenchem.
    if (text("site")) return;

    const next: Errors = {};
    if (!text("nome")) next.nome = diagnostico.errors.name;
    if (!isValidEmail(text("email"))) next.email = diagnostico.errors.email;
    if (data.get("consentimento") !== "on") next.consentimento = diagnostico.errors.consent;
    setErrors(next);

    const firstInvalid = (["nome", "email", "consentimento"] as const).find((key) => next[key]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      await sendDiagnostic({
        nome: text("nome"),
        email: text("email"),
        whatsapp: text("whatsapp"),
        empresa: text("empresa"),
        segmento: text("segmento"),
        mensagem: text("mensagem"),
        consentimento: true,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col gap-1.5 rounded-card border-[1.5px] border-live-text bg-live-bg p-6">
        <p className="m-0 font-display text-[22px] font-semibold">{diagnostico.success.title}</p>
        <p className="m-0 text-[15px] leading-[23px]">{diagnostico.success.text}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-card border border-line bg-card p-5 md:p-7"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("nome")} className="text-sm font-semibold">
            {f.name}
          </label>
          <input
            id={id("nome")}
            name="nome"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.nome ? true : undefined}
            aria-describedby={errors.nome ? id("nome-erro") : undefined}
            className={`${fieldBase} ${fieldOk}`}
          />
          {errors.nome ? (
            <span id={id("nome-erro")} className="text-[13px] text-danger">
              {errors.nome}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("email")} className="text-sm font-semibold">
            {f.email}
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? id("email-erro") : undefined}
            className={`${fieldBase} ${fieldOk}`}
          />
          {errors.email ? (
            <span id={id("email-erro")} className="text-[13px] text-danger">
              {errors.email}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("whatsapp")} className="text-sm font-semibold">
            {f.whatsapp} <span className="font-normal text-muted">{f.optional}</span>
          </label>
          <input id={id("whatsapp")} name="whatsapp" type="tel" autoComplete="tel" className={`${fieldBase} ${fieldOk}`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("empresa")} className="text-sm font-semibold">
            {f.company}
          </label>
          <input
            id={id("empresa")}
            name="empresa"
            type="text"
            autoComplete="organization"
            className={`${fieldBase} ${fieldOk}`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={id("segmento")} className="text-sm font-semibold">
          {f.segment}
        </label>
        <select id={id("segmento")} name="segmento" className={`${fieldBase} ${fieldOk}`}>
          {diagnostico.segments.map((segment) => (
            <option key={segment} value={segment}>
              {segment}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={id("mensagem")} className="text-sm font-semibold">
          {f.message}
        </label>
        <textarea
          id={id("mensagem")}
          name="mensagem"
          rows={4}
          className={`${fieldBase} ${fieldOk} py-3 leading-6`}
        />
      </div>

      {/* Campo armadilha para robôs. Fica fora da tela e fora da ordem de foco. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Não preencha este campo
          <input name="site" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <input
            id={id("consentimento")}
            name="consentimento"
            type="checkbox"
            aria-invalid={errors.consentimento ? true : undefined}
            aria-describedby={errors.consentimento ? id("consentimento-erro") : undefined}
            className="mt-0.5 h-6 w-6 flex-none accent-petrol"
          />
          <label htmlFor={id("consentimento")} className="text-sm leading-[21px] text-ink-soft">
            {f.consent.replace("Política de privacidade", "")}
            <Link to={legal.privacidade.path} className="underline underline-offset-2">
              Política de privacidade
            </Link>
            .
          </label>
        </div>
        {errors.consentimento ? (
          <span id={id("consentimento-erro")} className="text-[13px] text-danger">
            {errors.consentimento}
          </span>
        ) : null}
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-card border-[1.5px] border-danger bg-danger-bg p-4 text-[15px] leading-[23px]">
          {diagnostico.errors.send}
          {whatsapp ? (
            <>
              {" "}
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                WhatsApp
              </a>
            </>
          ) : null}
        </div>
      ) : null}

      <div>
        <Button type="submit" arrow large disabled={status === "sending"} busy={status === "sending"}>
          {status === "sending" ? diagnostico.sending : diagnostico.submit}
        </Button>
      </div>
    </form>
  );
}
