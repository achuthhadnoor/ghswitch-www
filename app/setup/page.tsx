import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "../assets/background-image.png";

export default function Setup() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-slate-900 bg-[#e8e8e3]">
      {/* Background Image */}

      <main className="z-10 flex w-full max-w-4xl mx-auto flex-col px-6 py-24 sm:px-12 md:py-32 min-h-screen relative">
  <Link href="/" className="text-slate-800 hover:text-black mb-12 flex items-center gap-2 w-fit font-medium transition-colors bg-white/40 px-4 py-2 rounded-lg backdrop-blur-md">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-5xl font-[family-name:var(--font-instrument-serif)] font-normal text-slate-900 mb-16 drop-shadow-sm">
          Setup Guide
        </h1>

        <div className="flex flex-col gap-16">
          <section id="macos" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM234.5 106.6c20.3-25.1 31.9-55.5 28.5-86.6-26.6 1.1-57.8 17.6-78.6 42.1-18.2 21.4-31 51.5-27.2 81.4 29.8 2.2 57.3-13.6 77.3-36.9z" /></svg>
              macOS Installation
            </h2>
            <div className="bg-white/40 border border-white/60 shadow-[4px_4px_0_0_#0f172a] p-8 rounded-2xl backdrop-blur-md text-slate-800">
              <ol className="list-decimal pl-5 space-y-4 text-lg font-medium">
                <li>Download the <code className="bg-white/60 px-2 py-0.5 rounded text-slate-900 font-mono text-base border border-white">GHSwitch.dmg</code> from the Polar checkout link.</li>
                <li>Double click the downloaded <code className="bg-white/60 px-2 py-0.5 rounded text-slate-900 font-mono text-base border border-white">.dmg</code> file to mount it.</li>
                <li>Drag the GHSwitch app icon into your Applications folder.</li>
                <li>
                  Because the app is not signed with an Apple Developer certificate, macOS will block it from opening. To allow it to run, open your Terminal app and run the following command:<br/>
                  <code className="block bg-slate-900/10 p-3 mt-3 rounded-lg text-slate-900 font-mono text-sm border border-slate-900/20 select-all">xattr -cr /Applications/GHSwitch.app</code>
                </li>
                <li>Open GHSwitch from your Applications folder or via Spotlight.</li>
                <li>The app will run quietly in your macOS menu bar. Click the menu bar icon to open Settings and configure your profiles.</li>
              </ol>
            </div>
          </section>

          <section id="windows" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg>
              Windows Installation
            </h2>
            <div className="bg-white/40 border border-white/60 shadow-[4px_4px_0_0_#0f172a] p-8 rounded-2xl backdrop-blur-md text-slate-800">
              <ol className="list-decimal pl-5 space-y-4 text-lg font-medium">
                <li>Download the <code className="bg-white/60 px-2 py-0.5 rounded text-slate-900 font-mono text-base border border-white">GHSwitch_Setup.exe</code> from the Polar checkout link.</li>
                <li>Run the installer. If Microsoft Defender SmartScreen prevents it from starting (because the app is unsigned), click <strong>More info</strong> and then <strong>Run anyway</strong>.</li>
                <li>Once installed, launch GHSwitch from your Start Menu.</li>
                <li>The app will run in your Windows system tray (bottom right). Click the tray icon to manage your profiles.</li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
