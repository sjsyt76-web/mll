import { Intro } from "./components/Intro";
import { CornerLogo } from "./components/CornerLogo";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Bottles } from "./components/Bottles";
import { ProductGrid } from "./components/ProductGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Intro />
      <CornerLogo />
      <Header />
      <Hero />
      <Features />
      <Bottles />
      <ProductGrid />
      <About />
      <Footer />
    </div>
  );
}
