function Home() {
  const cardClasses = "bg-gray-700 rounded-lg shadow-md p-4";
  const smallCardClasses = "bg-gray-500 rounded-lg shadow-md py-4 px-20 text-center hover:bg-gray-400 transition";

  return <>
    <h1 className="text-5xl font-bold">Welcome to the circus !</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className={cardClasses}>
        <h2 className="text-5xl mb-4 font-bold">Who I am</h2>
        <p>
          I'm DisaroSkell, a young french programmer and streamer.
          I studied Computer Science at Polytech Montpellier and I have experience in web and video game development.
          I love indie videogames, programming, and telling silly jokes.
        </p>
      </div>
      <div className={cardClasses}>
        <h2 className="text-5xl mb-4 font-bold">What I do</h2>
        <p>
          When I'm motivated enough, I create games and web applications.
          You can see some of my projects on <a href="/projects" className="text-blue-400 hover:underline">this page</a>.
          You can also find me streaming on <a href="https://twitch.tv/disaroskell" className="text-blue-400 hover:underline">Twitch</a>.
        </p>
      </div>
      <div className={cardClasses + " col-span-2"}>
        <h2 className="text-5xl mb-4 font-bold">Join me</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <a href="https://twitch.tv/disaroskell" className={smallCardClasses}>
            <h3 className="text-xl mb-4 font-bold">Twitch</h3>
            <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg" alt="Twitch Logo" />
          </a>
          <a href="https://discord.com/invite/ubKvya5NCC" className={smallCardClasses}>
            <h3 className="text-xl mb-4 font-bold">Discord</h3>
            <img className="w-full" src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" alt="Discord Logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCkiTlCFWQ15LmFdRewkhfpA" className={smallCardClasses}>
            <h3 className="text-xl mb-4 font-bold">YouTube</h3>
            <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube Logo" />
          </a>
          <a href="https://www.tiktok.com/@disaroskel" className={smallCardClasses}>
            <h3 className="text-xl mb-4 font-bold">TikTok</h3>
            <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" alt="TikTok Logo" />
          </a>
        </div>
      </div>
    </div>
  </>
}

export default Home
