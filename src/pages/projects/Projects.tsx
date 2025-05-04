function Projects() {
  const projects = [
    {
      name: "PokéFlex 2",
      description: "A pokémon quiz game made with NextJS.",
      link: "http://disaroskell.github.io/PokeFlex2",
      starred: true,
    },
    {
      name: "Cyka Blyat",
      description: "Hotline Miami demake made with Unity.",
      link: "/projects/cykablyat",
      starred: true,
    },
    {
      name: "Monsieur Sourire",
      description: "Little jam game where you have to throw poop at a big baddie.",
      link: "https://loulaty.itch.io/monsieur-sourire",
      starred: false,
    },
  ];

  return <>
    <div className="flex justify-between items-end mb-6">
      <h1 className="text-3xl font-bold">My projects</h1>
      <p className="text-gray-300">&#11088; = Playable online !</p>
    </div>
    <ul className="space-y-4">
      {projects.map((project, index) => (
        <li key={index} className="bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition">
          <a
            href={project.link}
            className="block p-4"
          >
            <div className="flex justify-between">
              <p className="text-blue-400 font-semibold">{project.name}</p>
              {project.starred ? <span className="text-yellow-400">&#11088;</span> : <></>}
            </div>
            <p className="text-gray-100">{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  </>;
}

export default Projects;
