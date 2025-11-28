"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CTAButton from "@/components/CTA/CTAButton";

const DESKTOP_BREAKPOINTS = [
  {
    minWidth: 1366,
    text: "-mt-8 translate-y-10 max-w-[800px]",
    carWrapper: "-mr-12 translate-y-[30%]",
    image: "scale-[1.5] -translate-x-8 translate-y-12",
  },
  {
    minWidth: 1200,
    text: "-mt-6 translate-y-8 max-w-[600px]",
    carWrapper: "-mr-10 translate-y-8",
    image: "scale-[1.1] -translate-x-6 translate-y-10",
  },
  {
    minWidth: 1040,
    text: "-mt-4 translate-y-6",
    carWrapper: "-mr-6 translate-y-6",
    image: "scale-[1.22] -translate-x-4 translate-y-8",
  },
  {
    minWidth: 900,
    text: "-mt-2 translate-y-4",
    carWrapper: "-mr-4 translate-y-4",
    image: "scale-[1.18] -translate-x-3 translate-y-6",
  },
  {
    minWidth: 0,
    text: "-mt-1 translate-y-2",
    carWrapper: "-mr-2 translate-y-2",
    image: "scale-[1.15] -translate-x-2 translate-y-4",
  },
];

const DEFAULT_VIEWPORT = { width: 0, height: 0 };

export default function Hero() {
  const getViewport = () => {
    if (typeof window === "undefined") {
      return DEFAULT_VIEWPORT;
    }
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [viewport, setViewport] = useState(getViewport);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setViewport(getViewport());
    };

    updateViewport();
    setMounted(true);

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  const effectiveViewport = mounted ? viewport : DEFAULT_VIEWPORT;
  const isPortrait = effectiveViewport.height >= effectiveViewport.width;
  const desktopLayout = mounted && !isPortrait && effectiveViewport.width > 0;
  const desktopPreset = desktopLayout
    ? DESKTOP_BREAKPOINTS.find((preset) => effectiveViewport.width >= preset.minWidth) ??
      DESKTOP_BREAKPOINTS[DESKTOP_BREAKPOINTS.length - 1]
    : null;

  const containerClasses = [
    "w-full max-w-[1700px] mx-auto px-4 sm:px-6",
    desktopLayout ? "lg:px-0" : "",
    "flex",
    desktopLayout
      ? "flex-row-reverse items-center gap-10 xl:gap-16"
      : "flex-col items-center gap-10",
  ]
    .join(" ")
    .trim();

  const textClasses = [
    "w-full",
    desktopLayout
      ? [
          "flex-1 max-w-[560px] text-right self-start",
          desktopPreset?.text ?? "",
        ].join(" ")
      : "text-center",
  ]
    .join(" ")
    .trim();

  const paragraphClasses = desktopLayout
    ? "text-xl text-gray-200/90 max-w-lg ml-auto"
    : "text-lg sm:text-xl text-gray-200/90 max-w-xl mx-auto";

  const ctaWrapperClasses = desktopLayout
    ? "mt-10 flex justify-end"
    : "mt-10 flex justify-center";

  const carWrapperClasses = [
    "w-full relative overflow-visible h-[360px] sm:h-[420px] md:h-[520px] lg:h-[760px] xl:h-[840px] 2xl:h-[900px]",
    "flex items-center",
    desktopLayout
      ? [
          "flex-1 justify-start self-end mt-0",
          desktopPreset?.carWrapper ?? "",
        ].join(" ")
      : "justify-center mt-6",
  ]
    .join(" ")
    .trim();

  const imageClasses = [
    "object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)] transition-transform duration-300",
    desktopLayout
      ? [
          "origin-bottom-left",
          desktopPreset?.image ?? "scale-[1.2] -translate-x-3 translate-y-6",
        ].join(" ")
      : "origin-bottom scale-[1.05] sm:scale-[1.15] md:scale-[1.2]",
  ]
    .join(" ")
    .trim();

  return (
    <section
      id="inicio"
      className="section pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--color-dark-900)] via-[var(--color-dark-800)] to-transparent relative overflow-visible pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute -left-1/3 top-[-20%] w-[70%] h-[160%] bg-gradient-to-br from-[rgba(212,175,55,0.35)] via-transparent to-transparent blur-[120px] rotate-[-15deg] opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/4 top-1/3 w-[50%] h-[120%] bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-transparent blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-10 top-16 w-[65%] h-[4px] bg-gradient-to-r from-[rgba(212,175,55,0.6)] via-[rgba(212,175,55,0.1)] to-transparent rotate-[-12deg]"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-40 w-[70%] h-[3px] bg-gradient-to-r from-[rgba(212,175,55,0.45)] via-[rgba(212,175,55,0.05)] to-transparent rotate-[-10deg]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-[35vh] h-[460px] bg-gradient-to-b from-[rgba(212,175,55,0.32)] via-[rgba(15,15,15,0.45)] to-transparent blur-[180px] opacity-85 z-[5]"
        />
      </div>
      <div className={containerClasses}>
        <div className={textClasses}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.73rem] font-semibold text-white leading-tight mb-6">
            <span className="text-[var(--color-primary-500)]">
              Uma solução silenciosa, discreta e moderna,{" "}
            </span>
            <span className="text-white font-light">
              feita para poucos: aqueles que unem segurança, estilo e perspicácia em cada escolha.
            </span>
          </h1>
          <p className={paragraphClasses}>
            Blindagem inteligente que não compromete performance. Proteção invisível para quem entende
            que verdadeira sofisticação é discreta.
          </p>
          <div className={ctaWrapperClasses}>
            <CTAButton label="Quero falar com um especialista" />
          </div>
        </div>

        <div className={carWrapperClasses}>
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[60px] bg-gradient-to-br from-[rgba(212,175,55,0.18)] via-transparent to-transparent blur-3xl opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 left-0 w-[80%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_65%)] blur-3xl opacity-70"
          />
          <Image
            src="/imagens/hero.png"
            alt="Veículo Blindado"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, (max-width: 1280px) 60vw, (max-width: 1536px) 55vw, 60vw"
            className={imageClasses}
            priority
          />
        </div>
      </div>
    </section>
  );
}
