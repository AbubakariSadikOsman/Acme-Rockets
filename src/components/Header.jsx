import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl text-white font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-4xl md:hidden focus:outline-none w-8 h-8 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className={`bg-white w-8 h-1 rounded absolute -mt-0.5 transition-all duration-500 ${isMenuOpen ? 'transform rotate-45' : ''}`}></div>
            <div className={`bg-white w-8 h-1 rounded absolute -mt-0.5 transition-all duration-500 ${isMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>
          <nav className="hidden md:block text-xl space-x-8" aria-label="main-navigation">
            <a href="#rockets" className="hover:opacity-80">Our Rockets</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
            <a href="#contact" className="hover:opacity-80">Contact Us</a>
          </nav>
        </div>
      </section>
      {isMenuOpen && (
        <section id="mobile-menu" className="absolute top-68 bg-black w-full text-5xl flex flex-col justify-content-center origin-top animate-open-menu">
          <nav className="min-h-screen flex flex-col items-center py-8" aria-label="mobile">
            <a href="#hero" className="w-full text-center py-6 hover:opacity-80">Home</a>
            <a href="#rockets" className="w-full text-center py-6 hover:opacity-80">Our Rockets</a>
            <a href="#testimonials" className="w-full text-center py-6 hover:opacity-80">Testimonials</a>
            <a href="#contact" className="w-full text-center py-6 hover:opacity-80">Contact Us</a>
            <a href="#footer" className="w-full text-center py-6 hover:opacity-80">Legal</a>
          </nav>
        </section>
      )}
    </header>
  );
}

export default Header;
