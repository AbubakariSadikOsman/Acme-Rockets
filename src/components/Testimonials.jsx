function Testimonials() {
  return (
    <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>
      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400">
            Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected.
            Life-long customer! A++ shopping experience.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:2xl text-right text-slate-500 dark:text-slate-400 mt-1">
          &#8212;Wile E. Coyote, Genius
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400">
            The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occasions. <span className="italic">This makes me very, very angry!</span> Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:2xl text-right text-slate-500 dark:text-slate-400 mt-1">
          &#8212;Marvin The Martian & K-9
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400">
            I knew not only I wanted &#8212; <span className="italic">I needed</span> &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered in one! Nothing says <q className="italic">Take me to your leader</q> like Acme's Infinity Rocket!💯
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:2xl text-right text-slate-500 dark:text-slate-400 mt-1">
          &#8212;Buzz Lightyear
        </figcaption>
      </figure>
    </section>
  );
}

export default Testimonials;
