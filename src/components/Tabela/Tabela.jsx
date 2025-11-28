import CTAButton from "@/components/CTA/CTAButton";

const levels = [
  {
    id: "nivelI",
    name: "Nível I",
    ammo: ["22 LRHV Lead", "38 Special RN Lead"],
    mass: ["2,6 +/- 0,1", "10,2 +/- 0,1"],
    velocity: ["320 +/- 10", "254 +/- 15"],
    impacts: "5",
  },
  {
    id: "nivelIIA",
    name: "Nível II A",
    ammo: ["9 mm FMJ"],
    mass: ["8,0 +/- 0,1"],
    velocity: ["332 +/- 12"],
    impacts: "5",
  },
  {
    id: "nivelII",
    name: "Nível II",
    ammo: ["9 mm FMJ", "357 Magnum JSP"],
    mass: ["8,0 +/- 0,1", "10,2 +/- 0,1"],
    velocity: ["358 +/- 15", "425 +/- 12"],
    impacts: "5",
  },
  {
    id: "padrao",
    name: "Padrão BlindaSeg",
    subtitle: "Nível III A + inclui níveis anteriores",
    ammo: ["9 mm FMJ", "44 Magnum Lad SWC Gas Checked"],
    mass: ["8,0 +/- 0,1", "15,6 +/- 0,1"],
    velocity: ["426 +/- 15", "426 +/- 15"],
    impacts: "5",
    highlight: true,
  },
  {
    id: "nivelIII",
    name: "Nível III",
    ammo: ["7,62 OTAN FMJ (308 Winchester)"],
    mass: ["9,8 +/- 0,1"],
    velocity: ["838 +/- 15"],
    impacts: "5",
  },
];

const rows = [
  { key: "ammo", label: "Munição" },
  { key: "mass", label: "Massa do projétil (g)" },
  { key: "velocity", label: "Velocidade (m/s)" },
  { key: "impacts", label: "Número de impactos" },
];

const renderValues = (values) =>
  Array.isArray(values) ? (
    <div className="space-y-1">
      {values.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  ) : (
    <p>{values}</p>
  );

export default function Tabela() {
  return (
    <section
      id="tabela"
      className="section relative overflow-visible bg-gradient-to-b from-transparent via-[var(--color-dark-900)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[35vh] h-[420px] bg-gradient-to-b from-[rgba(212,175,55,0.25)] via-[rgba(15,15,15,0.45)] to-transparent blur-[170px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-48 h-80 bg-gradient-to-b from-[rgba(212,175,55,0.2)] via-[rgba(15,15,15,0.55)] to-transparent blur-[140px] opacity-65"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Comparativo
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Níveis de Segurança da Blindagem
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Compare munições, massas e velocidades para entender o alcance de cada nível e o padrão
            exclusivo da BlindaSeg.
          </p>
        </header>

        <div className="hidden lg:block">
          <div className="rounded-[40px] border border-[rgba(255,255,255,0.1)] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <table className="w-full text-center text-gray-100 text-sm">
              <thead>
                <tr className="bg-[rgba(15,15,15,0.8)] text-white uppercase tracking-wide text-xs">
                  <th className="p-5 text-left text-[var(--color-primary-500)]">
                    Níveis de segurança
                  </th>
                  {levels.map((level) => (
                    <th
                      key={level.id}
                      className={`group border-l border-[rgba(255,255,255,0.08)] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.05)] ${
                        level.highlight
                          ? "bg-gradient-to-br from-[rgba(212,175,55,0.35)] via-[rgba(212,175,55,0.18)] to-transparent relative after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:h-14 after:w-14 after:rounded-full after:bg-[rgba(212,175,55,0.15)] after:blur-xl hover:shadow-[0_25px_60px_rgba(212,175,55,0.35)]"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`text-base font-semibold transition-colors ${
                            level.highlight ? "group-hover:text-[var(--color-primary-500)]" : ""
                          }`}
                        >
                          {level.name}
                        </span>
                        {level.subtitle && (
                          <span className="text-[0.7rem] tracking-tight text-white/70">
                            {level.subtitle}
                          </span>
                        )}
                        {level.highlight && (
                          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(212,175,55,0.15)] px-3 py-1 text-[0.65rem] uppercase text-[var(--color-primary-500)] tracking-[0.2em] group-hover:bg-[rgba(212,175,55,0.25)]">
                            ✦ Exclusivo
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.key} className="border-t border-[rgba(255,255,255,0.08)]">
                    <td className="p-6 text-left font-semibold text-white">{row.label}</td>
                    {levels.map((level) => (
                      <td
                        key={level.id}
                        className={`p-6 border-l border-[rgba(255,255,255,0.04)] align-top transition duration-300 hover:bg-[rgba(255,255,255,0.04)] ${
                          level.highlight
                            ? "bg-gradient-to-b from-[rgba(255,255,255,0.02)] via-[rgba(212,175,55,0.08)] to-transparent hover:bg-[rgba(212,175,55,0.12)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.35)]"
                            : ""
                        }`}
                      >
                        {renderValues(level[row.key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 lg:hidden">
          {levels.map((level) => (
            <article
              key={level.id}
              className={`rounded-[32px] p-6 border border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-[rgba(20,20,20,0.9)] to-[rgba(0,0,0,0.9)] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(0,0,0,0.7)] ${
                level.highlight
                  ? "border-[var(--color-primary-500)] shadow-[0_25px_80px_rgba(212,175,55,0.45)] hover:shadow-[0_35px_120px_rgba(212,175,55,0.5)]"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary-500)]">
                    {level.highlight ? "Padrão Blindaseg" : "Nível de segurança"}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{level.name}</h3>
                  {level.subtitle && <p className="text-xs text-white/70 mt-1">{level.subtitle}</p>}
                </div>
                {level.highlight && (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(212,175,55,0.2)] text-[var(--color-primary-500)] animate-pulse">
                    ✦
                  </span>
                )}
              </div>
              <dl className="space-y-4">
                {rows.map((row) => (
                  <div
                    key={row.key}
                    className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <dt className="text-sm uppercase tracking-wide text-gray-400">{row.label}</dt>
                    <dd className="mt-1 text-white text-base">{renderValues(level[row.key])}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton label="Receber recomendação de blindagem" />
        </div>
      </div>
    </section>
  );
}
