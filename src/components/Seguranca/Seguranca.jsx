const highlights = [
  "Tecnologia de ponta em blindagem veicular",
  "Equipe experiente e certificada",
  "Garantia completa em todos os serviços",
  "Atendimento personalizado e transparente",
  "Monitoramento constante de qualidade",
  "Suporte pós-serviço dedicado",
];

export default function Seguranca() {
  return (
    <section
      id="seguranca"
      className="section relative overflow-visible bg-gradient-to-b from-transparent via-[var(--color-dark-900)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-gradient-to-b from-[rgba(212,175,55,0.25)] via-[rgba(15,15,15,0.45)] to-transparent blur-[140px] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-64 bg-gradient-to-b from-[rgba(212,175,55,0.2)] via-[rgba(15,15,15,0.55)] to-transparent blur-[140px] opacity-65"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Confiança Blindaseg
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Segurança em Primeiro Lugar
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Do primeiro contato à entrega, garantimos processos rigorosos, comunicação clara e um
            pós-venda presente.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[rgba(20,20,20,0.9)] to-[rgba(0,0,0,0.85)] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-semibold text-white mb-6">Por que escolher a Blindaseg?</h3>
            <ul className="space-y-5 text-gray-300">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="group flex gap-4 rounded-2xl border border-transparent px-4 py-3 transition duration-300 md:hover:border-[rgba(212,175,55,0.3)] md:hover:bg-[rgba(212,175,55,0.08)] md:hover:shadow-[0_15px_50px_rgba(212,175,55,0.25)]"
                >
                  <span className="text-[var(--color-primary-500)] text-xl transition duration-300 md:group-hover:scale-110">
                    ✦
                  </span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="contato"
            className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[rgba(20,20,20,0.95)] to-[rgba(0,0,0,0.85)] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary-500)]">
                Atendimento Prioritário
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Entre em contato com nossos especialistas
              </h3>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:outline-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Telefone ou WhatsApp"
                className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:outline-none"
              />
              <textarea
                placeholder="Conte-nos sobre sua necessidade"
                rows="4"
                className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:outline-none"
              />
              <button className="w-full rounded-2xl bg-[var(--color-primary-500)] px-6 py-3 text-black font-semibold transition hover:bg-[var(--color-primary-600)]">
                Falar com a Blindaseg
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-400">
              Retornamos em até 1 dia útil com uma proposta personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
