function Page() {
    return <div>
        <a href="/projects" className="text-blue-600 underline">&#8592; Back to projects</a>
        <div className="h-full w-full" data-width="960" data-height="590" style={{ height: "590px", width: "960px" }}>
            <iframe className="border-0 h-full w-full" allowFullScreen={true} allowTransparency={true} src="https://html-classic.itch.zone/html/10936567/index.html" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share" id="game" scrolling="no"></iframe>
        </div>
        <p>Playing: Cyka Blyat by DisaroSkell and xTaChi</p>
    </div>;
}

export default Page;
