function Contact() {
  return (
    <section id="contact" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Contact Us
      </h2>
      <form action="" method="post" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          minLength="2"
          maxLength="60"
          placeholder="Your subject"
          required
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-2xl border border-solid border-slate-900 dark:border-none"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-2xl border border-solid border-slate-900 dark:border-none"
        />
        <button
          type="submit"
          className="w-48 bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 border border-solid border-slate-900 dark:border-none rounded-xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
