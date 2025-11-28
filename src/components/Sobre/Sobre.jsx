import Image from "next/image";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="section pt-24 pb-28 md:pt-28 md:pb-36 relative overflow-hidden bg-gradient-to-b from-[var(--color-dark-900)] via-[var(--color-dark-800)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[34vh] h-[480px] bg-gradient-to-b from-[rgba(212,175,55,0.24)] via-[rgba(15,15,15,0.55)] to-transparent blur-[200px] opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[26vh] h-[420px] bg-gradient-to-b from-[rgba(212,175,55,0.18)] via-[rgba(15,15,15,0.6)] to-transparent blur-[180px] opacity-70"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Sobre a Blindaseg
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Segurança que transcende a blindagem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          <div className="space-y-5 text-left">
            <p className="text-lg leading-relaxed text-gray-200">
              Há mais de vinte anos, <span className="text-[var(--color-primary-500)]">somos os pioneiros em elevar os padrões de segurança automotiva</span>{" "}
              oferecendo mais do que uma blindagem: tranquilidade em movimento. Não é só sobre carros blindados. É sobre liberdade sem medo, confiança total e
              tranquilidade em cada curva. Na Blindaseg, oferecemos mais do que uma blindagem.
            </p>
            <p className="text-lg font-semibold text-[var(--color-primary-500)]">
              Garantimos uma experiência de segurança única.
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_60%)] blur-3xl opacity-80 md:opacity-90 pointer-events-none" />
            <div className="relative w-full max-w-[520px] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[820px] aspect-[4/1.6]">
              <Image
                src="/imagens/logo-sem-fundo.png"
                alt="Blindaseg"
                fill
                sizes="(max-width: 640px) 520px, (max-width: 1024px) 760px, 820px"
                className="object-contain drop-shadow-[0_30px_90px_rgba(212,175,55,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
