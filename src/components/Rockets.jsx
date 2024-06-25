import rocketman from '../img/rocketman.png';
import rocketride from '../img/rocketride.png';
import rocketlaunch from '../img/rocketlaunch.png';

function Rockets() {
  return (
    <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 mt-2 rounded-3xl shadow-xl">
          <img src={rocketman} alt="Explorer" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$</p>
          <p className="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400">Affordable Exploration</p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 mt-2 rounded-3xl shadow-xl">
          <img src={rocketride} alt="Adventurer" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$$</p>
          <p className="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400">Best Selling Rockets</p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 mt-2 rounded-3xl shadow-xl">
          <img src={rocketlaunch} alt="Infinity" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$$$</p>
          <p className="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400">Luxury Starship</p>
        </li>
      </ul>
    </section>
  );
}

export default Rockets;
