import rocketdab from '../img/rocketdab.png';

function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse justify-center items-center sm:flex-row p-6 gap-8 mb-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <article className="sm:1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldly Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before...
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          We are building rockets for the next century today. From moon to Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Think Acme Rockets
        </p>
      </article>
      <img src={rocketdab} alt="Rocket Dab" className="sm:1/2" />
    </section>
  );
}

export default Hero;
