import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();

  return (
    <div className="px-7 py-7 flex flex-col gap-y-2">
      <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
        Mutia Pegi Intanswari
      </h1>
      <p className="md:w-3/4 text-lg text-gray-500 text-center md:text-justify font-normal tracking-tight">
        {configData.descab}
      </p>
      <div className="flex items-center text-center md:text-justify justify-center md:justify-normal pt-6">
        <a href={configData.hireMeLink}>
          <button
            type="button"
            className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813-2.846a4.5 4.5 0 003.09-3.09L15.75 12l-2.846-.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18.9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l-1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259-1.035a3.375 3.375 0 002.456-2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          Hire Me
        </button>
      </a>
    </div>
  </div>
);
}
