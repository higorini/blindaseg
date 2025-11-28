import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Produtos from '@/components/Produtos/Produtos';
import Diferenciais from '@/components/Diferenciais/Diferenciais';
import ServicosPremium from '@/components/Servicos/ServicosPremium';
import Tabela from '@/components/Tabela/Tabela';
import Seguranca from '@/components/Seguranca/Seguranca';
import Footer from '@/components/Footer/Footer';
import Parceiros from '@/components/Parceiros/Parceiros';
import Sobre from '@/components/Sobre/Sobre';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Produtos />
      <Diferenciais />
      <Tabela />
      <ServicosPremium />
      <Parceiros />
      <Sobre />
      <Seguranca />
      <Footer />
    </main>
  );
}
