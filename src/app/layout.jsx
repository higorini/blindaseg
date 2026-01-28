import './globals.css';

export const metadata = {
  title: 'Blindaseg - Segurança Discreta e Elegante',
  description:
    'Blindagens veiculares premium, silenciosas e discretas. Para quem une segurança, estilo e perspicácia em cada escolha.',
  icons: {
    icon: '/imagens/logo/logo-favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
