import Image from "next/image";

const partners = [
  { name: "AGP", logo: "/imagens/parceiros/agp.svg", width: 180, height: 180 },
  { name: "Eblinglass", logo: "/imagens/parceiros/eblinglass.png", width: 180, height: 180 },
  { name: "Secforce", logo: "/imagens/parceiros/secforce.png", width: 180, height: 180 },
  { name: "WKR", logo: "/imagens/parceiros/wkr.png", width: 180, height: 180 },
];

export default function Parceiros() {
  return (
    <section
      id="parceiros"
      className="section relative overflow-hidden bg-gradient-to-b from-[var(--color-dark-900)] via-[var(--color-dark-800)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[32vh] h-[420px] bg-gradient-to-b from-[rgba(212,175,55,0.25)] via-[rgba(15,15,15,0.4)] to-transparent blur-[170px] opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[26vh] h-[380px] bg-gradient-to-b from-[rgba(212,175,55,0.18)] via-[rgba(15,15,15,0.55)] to-transparent blur-[150px] opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Conheça nossos fornecedores
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Parcerias fortes, segurança inigualável
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Selecionamos fabricantes de alto padrão para garantir blindagens silenciosas, duráveis e
            confiáveis.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(10,10,10,0.6)] shadow-[0_25px_80px_rgba(0,0,0,0.55)] aspect-square overflow-hidden transition duration-300 hover:border-[var(--color-primary-500)] hover:shadow-[0_30px_100px_rgba(212,175,55,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition duration-300" />
              <Image
                src={partner.logo}
                alt={`Parceiro ${partner.name}`}
                width={partner.width}
                height={partner.height}
                className="w-[65%] h-[65%] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
