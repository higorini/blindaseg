"use client";

import { useState } from "react";
import { config } from "@/constants/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-primary-500)]/15 bg-[rgba(0,0,0,0.75)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="text-2xl font-semibold text-[var(--color-primary-500)]">
          {config.siteName}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <ul className="hidden items-center gap-8 text-sm uppercase tracking-[0.3em] text-white md:flex">
          {config.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 transition hover:text-[var(--color-primary-500)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full border border-[var(--color-primary-500)] px-5 py-2 text-sm font-semibold text-[var(--color-primary-500)] transition hover:bg-[var(--color-primary-500)] hover:text-black"
        >
          Consultoria Exclusiva
        </a>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3 rounded-2xl border border-[var(--color-primary-500)]/30 bg-[rgba(15,15,15,0.95)] p-6 text-center text-white">
            {config.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-1">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="mt-2 w-full rounded-full bg-[var(--color-primary-500)] px-5 py-2 font-semibold text-black inline-block"
              >
                Consultoria Exclusiva
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
