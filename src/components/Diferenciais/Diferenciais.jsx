import Image from "next/image";

const reasons = [
  {
    id: 1,
    title: "Rapidez: Blindagem em 7 dias úteis",
    image: "/imagens/razao1.png",
  },
  {
    id: 2,
    title: "Acabamento igual ao original de fábrica",
    image: "/imagens/razao2.png",
  },
  {
    id: 3,
    title: "10 anos de garantia no serviço BlindaSeg",
    image: "/imagens/razao3.png",
  },
  {
    id: 4,
    title: "10 anos de garantia contra delaminações",
    image: "/imagens/razao4.png",
  },
  {
    id: 5,
    title: "24 anos de experiência",
    image: "/imagens/razao5.png",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="section relative overflow-visible bg-gradient-to-b from-transparent via-[var(--color-dark-900)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[35vh] h-[400px] bg-gradient-to-b from-[rgba(212,175,55,0.3)] via-[rgba(15,15,15,0.4)] to-transparent blur-[160px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-48 h-72 bg-gradient-to-b from-[rgba(212,175,55,0.18)] via-[rgba(15,15,15,0.55)] to-transparent blur-[140px] opacity-65"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Além da Blindagem
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Razões para escolher a BlindaSeg
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Expertise, confiança e garantia em cada etapa do processo de blindagem.
          </p>
        </header>

        <div className="relative rounded-[48px] border border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[rgba(20,20,20,0.85)] via-[rgba(15,15,15,0.7)] to-[rgba(0,0,0,0.9)] px-6 py-10 md:px-10 md:py-14 shadow-[0_35px_120px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {reasons.map((reason) => (
              <article
                key={reason.id}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-[rgba(0,0,0,0.75)] border border-[rgba(212,175,55,0.5)] shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition transform duration-300 group-hover:scale-105 group-hover:border-[var(--color-primary-500)] group-hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)]">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-white text-lg leading-snug max-w-[220px] transition-colors duration-300 group-hover:text-[var(--color-primary-500)]">
                  {reason.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
