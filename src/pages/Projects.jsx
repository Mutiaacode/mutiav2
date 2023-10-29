{projects.map((project, index) => (
  <a
    key={index}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
    href={project["github-url"]} 
    target="_blank" 
  >
    <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
      <div className="card-image w-16 h-16 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={project["project-image-url"]}
          alt=""
        />
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <h1 className="font-medium text-lg">
        {project["project-name"]}
      </h1>
      <p className="text-gray-500 text-md">
        {project["project-desc"]}
      </p>
    </div>
    <button className="ml-auto hidden md:inline-block">
      <svg
        className={svgClass}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </a>
))}
