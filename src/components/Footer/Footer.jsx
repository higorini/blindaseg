import { config } from "@/constants/config";

const footerLinks = [
  {
    title: "Institucional",
    items: [
      { label: "Início", href: "#inicio" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Segurança", href: "#seguranca" },
    ],
  },
  {
    title: "Serviços",
    items: [
      { label: "Produtos", href: "#produtos" },
      { label: "Serviços Premium", href: "#servicos" },
      { label: "Tabela de Níveis", href: "#tabela" },
    ],
  },
  {
    title: "Suporte",
    items: [
      { label: "Contato", href: "#contato" },
      { label: "Consultoria Exclusiva", href: "#contato" },
      { label: "FAQ", href: "#seguranca" },
    ],
  },
];

const socialItems = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--color-dark-900)] to-[var(--color-dark-900)] border-t border-[var(--color-primary-500)]/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-36 h-48 bg-gradient-to-b from-[rgba(212,175,55,0.18)] via-[rgba(15,15,15,0.45)] to-transparent blur-[140px] opacity-65"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-primary-500)]">
              {config.siteName}
            </h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Segurança discreta, silenciosa e elegante. Blindagens premium para quem une sofisticação,
              segurança e perspicácia. Exclusivamente para discernidos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] text-gray-300 transition hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)]"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-400">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary-500)]">
                  {section.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="hover:text-[var(--color-primary-500)]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {config.siteName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
