"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao cadastrar.");
      setStatus("success");
      setMessage("Cadastro recebido!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Erro ao cadastrar.");
    }
  }

  return (
    <div className="rounded-panel bg-sand-light p-8">
      <h2 className="mb-1.5 font-display text-xl font-medium text-text">
        Receber novos textos por e-mail
      </h2>
      <p className="mb-5 text-[15px] text-text-soft">
        Avisos quando eu publicar um texto novo — sem spam, cancele quando quiser.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="flex-1 rounded-full border border-text/15 bg-white px-5 py-3 text-[15px] text-text placeholder:text-text-soft focus-visible:border-sage-deep"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-sage-deep px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-sage disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Quero receber"}
        </button>
      </form>
      {status !== "idle" && status !== "loading" && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-sage-deep" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
