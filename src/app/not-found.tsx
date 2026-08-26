import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-[560px] flex-col items-center justify-center px-6 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">Erro 404</p>
      <h1 className="mt-3 font-display text-3xl font-medium text-text">
        Essa página não foi encontrada.
      </h1>
      <p className="mt-3 text-text-soft">O endereço pode ter mudado ou não existe mais.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sage-deep px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sage"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
