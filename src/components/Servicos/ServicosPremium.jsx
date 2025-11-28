import CTAButton from "@/components/CTA/CTAButton";

const leftServices = [
  "Redimensionamento das suspensões dianteiras e traseiras",
  "Troca de molas e amortecedores especiais para blindados",
  "Instalação de cintas de aço e sistema run-flat para rodas",
  "Serviços de elétrica",
  "Reprogramação de sistemas eletrônicos",
  "Instalação e reparo de sirenes e intercomunicadores",
  "Reparos em pintura e funilaria para blindados",
  "Revisão e higienização de ar condicionado",
  "Polimento e cristalização de pintura",
  "Higienização interna",
  "Martelinho de ouro",
];

const rightServices = [
  "Atendimento às seguradoras",
  "Reforço e troca de suportes e máquinas de vidros",
  "Ajustes de portas",
  "Reparos de acabamentos internos e externos",
  "Reblindagem de veículos sinistrados",
  "Tapeçaria",
  "Colocação de bancos de couro",
  "Instalação de acessórios diversos",
  "Aplicação de insulfilm e película anti-vandalismo",
  "Eliminação de ruídos",
  "Eliminação de infiltração de água",
];

const ServiceColumn = ({ items }) => (
  <ul className="space-y-4">
    {items.map((service, index) => (
      <li
        key={service}
        className="group flex gap-4 rounded-2xl border border-transparent bg-[rgba(255,255,255,0.02)]/0 px-4 py-3 text-gray-200 transition duration-300 md:hover:border-[rgba(212,175,55,0.3)] md:hover:bg-[rgba(212,175,55,0.08)] md:hover:text-white md:hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
      >
        <span className="mt-1 text-[var(--color-primary-500)] transition duration-300 md:group-hover:scale-110">
          {index % 2 === 0 ? "✔" : "✦"}
        </span>
        <span className="text-base leading-relaxed">{service}</span>
      </li>
    ))}
  </ul>
);

export default function ServicosPremium() {
  return (
    <section
      id="servicos"
      className="section relative overflow-visible bg-gradient-to-b from-[var(--color-dark-900)] via-[var(--color-dark-800)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-gradient-to-b from-[rgba(212,175,55,0.25)] via-[rgba(15,15,15,0.45)] to-transparent blur-[140px] opacity-75"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Serviços Premium
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Conte com nossos especialistas para manter seu blindado impecável
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Nossa equipe protege e preserva seu veículo com processos exclusivos, tecnologia artesanal e
            atendimento dedicado.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          <ServiceColumn items={leftServices} />
          <ServiceColumn items={rightServices} />
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton label="Agendar revisão com especialistas" />
        </div>
      </div>
    </section>
  );
}
