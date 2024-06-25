function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way<br />
          Fairfield, New Jersey 12345-5555<br />
          Email: <a href="mailto:inquiries@acmerockets.com">Inquiries@AcmeRockets.com</a><br />
          Phone: <a href="tel:+233550111285">(+233) 55 011 1285</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:opacity-80">Our Rockets</a>
          <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
          <a href="#contact" className="hover:opacity-80">Contact Us</a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
