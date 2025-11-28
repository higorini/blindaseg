"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CTAButton from "@/components/CTA/CTAButton";

const products = [
  {
    id: "tradicional",
    title: "Blindagem\nTradicional",
    description:
      "Segurança discreta com aço balístico de alta performance. Mantém peso reduzido e silêncio absoluto, sem comprometer a agilidade do seu veículo.",
    badge: "Aramida | Aço balístico | Leve",
    image: "/imagens/tradicional.png",
  accent: "from-[rgba(212,175,55,0.25)] to-[rgba(0,0,0,0)]",
  },
  {
    id: "exclusiva",
    title: "Blindagem\nExclusiva",
    description:
      "Soluções super premium com acabamento exclusivo. Combina aço inox, aramida premium e reforços extra para proteção máxima, mantendo elegância, silêncio e zero manutenção.",
    badge: "Aramida premium | Inox | Extra proteção",
    image: "/imagens/artesanal.png",
    accent: "from-[rgba(212,175,55,0.35)] to-[rgba(0,0,0,0)]",
  },
];

function ProdutoCard({ product }) {
  const getInitialDesktop = () => {
    if (typeof window === "undefined") {
      return true;
    }
    return window.innerWidth >= 1024;
  };

  const [modalImage, setModalImage] = useState(null);
  const [isDesktop, setIsDesktop] = useState(getInitialDesktop);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (modalImage) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [modalImage]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => setModalImage(null);

  return (
    <>
      <article className="relative overflow-hidden rounded-[40px] bg-gradient-to-b from-[rgba(20,20,20,0.95)] via-[rgba(15,15,15,0.85)] to-transparent shadow-[0_35px_120px_rgba(0,0,0,0.6)] h-full flex flex-col">
        <div className="relative z-10 p-8 pb-4 md:p-10 flex flex-col gap-4 min-h-[260px]">
          <p className="tracking-[0.45em] text-[0.75rem] text-[var(--color-primary-500)] uppercase">
            produto
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight whitespace-pre-line">
            {product.title}
          </h3>
          <p className="text-gray-300 max-w-xl">{product.description}</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.2)] px-5 py-2 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-500)]" />
            {product.badge}
          </div>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent" />
        </div>

        <div className="relative px-4 pb-8 md:px-10 md:pb-10 w-full">
          <div className="relative mx-auto max-w-5xl w-full">
            <div className="absolute left-1/2 top-1/2 h-[110%] w-[90%] -translate-x-1/2 -translate-y-1/2 blur-[110px] bg-[radial-gradient(circle,rgba(212,175,55,0.5),transparent_75%)]" />
            <button
              type="button"
              disabled={!isDesktop}
              onClick={() => isDesktop && setModalImage(product.image)}
              className={`relative z-10 w-full transition-transform duration-300 ${
                isDesktop ? "hover:scale-[1.02]" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.title.replace("\n", " ")}
                width={1400}
                height={720}
                className="w-full object-contain drop-shadow-[0_25px_100px_rgba(0,0,0,0.75)] lg:scale-[1.1] xl:scale-[1.2]"
              />
              {isDesktop && (
                <span className="absolute bottom-6 right-6 rounded-full bg-[rgba(0,0,0,0.6)] px-4 py-1 text-xs uppercase tracking-wide text-white">
                  Clique para ampliar
                </span>
              )}
            </button>
          </div>
        </div>
      </article>
      {modalImage &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[2147483000] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 md:p-8"
            onClick={closeModal}
          >
            <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
            </div>
            <div className="relative w-full h-full max-w-[1400px] max-h-[95vh] flex items-center justify-center">
              <button
                type="button"
                className="absolute top-3 right-3 text-white text-sm uppercase tracking-wide opacity-90 hover:opacity-100 z-10"
                onClick={closeModal}
              >
                Fechar
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={modalImage}
                  alt="Pré-visualização ampliada"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default function Produtos() {
  return (
    <section
      id="produtos"
      className="section relative overflow-visible bg-gradient-to-b from-transparent via-[var(--color-dark-900)] to-[var(--color-dark-900)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[35vh] h-[400px] bg-gradient-to-b from-[rgba(212,175,55,0.28)] via-[rgba(15,15,15,0.4)] to-transparent blur-[180px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-56 h-80 bg-gradient-to-b from-[rgba(212,175,55,0.18)] via-[rgba(15,15,15,0.5)] to-transparent blur-[120px] opacity-65"
      />
      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        <header className="mb-12 text-center">
          <p className="tracking-[0.4em] text-[0.8rem] uppercase text-[var(--color-primary-500)]">
            Soluções Premium
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Segurança discreta, para quem entende
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Duas soluções sofisticadas que preservam elegância, performance e silêncio absoluto. Escolha
            a que melhor reflete seu estilo.
          </p>
        </header>

        <div className="mb-12 rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-gradient-to-r from-[rgba(212,175,55,0.08)] via-[rgba(15,15,15,0.6)] to-[rgba(212,175,55,0.08)] px-6 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary-500)]">
            exclusivo sistema iron insert
          </p>
          <p className="mt-2 text-gray-200">
            Aço inoxidável finamente filetado instalado no pacote interno dos vidros, deixando-os mais
            seguros e leves e substituindo de vez os antigos sistemas de sobreposição.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {products.map((product) => (
            <ProdutoCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton label="Planejar meu projeto blindado" />
        </div>
      </div>
    </section>
  );
}
