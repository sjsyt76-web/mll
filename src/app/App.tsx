import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import { Intro } from "./components/Intro";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Bottles } from "./components/Bottles";
import { ProductGrid } from "./components/ProductGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { CartDrawer } from "./components/CartDrawer";

export default function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
          <BackgroundEffects />
          <Intro />
          <Header />
          <Hero />
          <Features />
          <ProductGrid />
          <Bottles />
          <About />
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}
