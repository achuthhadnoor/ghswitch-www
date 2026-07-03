import Image from "next/image";
import AppIcon from "./assets/app-icon.png";
import TrayIcon from "./assets/tray.png";
import BackgroundImage from "./assets/background-image.png";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-slate-900">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center  h-screen" style={{ backgroundImage: `url(${BackgroundImage.src})` }} />

      {/* macOS Menubar Mockup */}
      <div className="absolute top-0 inset-x-0 h-7 bg-black/20 backdrop-blur-md flex justify-between items-center px-4 text-white/90 text-[13px] font-medium z-50 shadow-sm border-b border-white/10">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM234.5 106.6c20.3-25.1 31.9-55.5 28.5-86.6-26.6 1.1-57.8 17.6-78.6 42.1-18.2 21.4-31 51.5-27.2 81.4 29.8 2.2 57.3-13.6 77.3-36.9z" />
          </svg>
          <span className="font-bold">GHSwitch</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center h-full cursor-pointer">
            <span className="bg-white/10 px-2 py-1 rounded-md"><Image src={TrayIcon} width={12} height={12} alt="GHSwitch" /></span>
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-72 rounded-xl bg-[#1e1e1e]/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-1.5 text-white/90 text-[13px]">
              <div className="px-3 py-1.5 flex items-center gap-2 rounded-md bg-blue-500 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="truncate">Neha Singh <span className="text-white/70">(neha...85@gmail.com)</span></span>
              </div>
              <div className="px-3 py-1.5 flex items-center gap-2 rounded-md hover:bg-white/10 ml-5">
                <span className="truncate">Neha Singh <span className="text-white/50">(neha...1992@gmail.com)</span></span>
              </div>
              <div className="h-px bg-white/10 my-1 mx-2" />
              <div className="px-3 py-1.5 rounded-md hover:bg-white/10 mx-1 ml-5">Open Settings</div>
              <div className="px-3 py-1.5 rounded-md hover:bg-white/10 mx-1 ml-5">Quit</div>
            </div>
          </div>

          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
          <div className="flex items-center gap-1">
            <span>21%</span>
            <svg width="20" height="12" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="2" width="20" height="10" rx="2" ry="2" /><line x1="23" y1="5" x2="23" y2="9" /><rect x="3" y="4" width="4" height="6" fill="currentColor" /></svg>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <span>Fri Jul 3 10:31 PM</span>
        </div>
      </div>
      <main className="z-10 flex w-full container flex-col justify-center px-6 py-24 sm:px-12 md:py-32 min-h-screen relative">


        {/* Hero Section */}
        <div className="flex flex-col items-start text-left max-w-2xl mt-[-10vh] pl-4 sm:pl-16 pt-24 gap-4">
          {/* Desktop App Icon */}
          <div className="flex flex-col items-center gap-1.5 z-40">
            <Image src={AppIcon} width={64} height={64} alt="GHSwitch" className="rounded-2xl shadow-xl border border-white/10" />
            <span className="text-white text-[12px] font-bold drop-shadow-md" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>GHSwitch</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-[family-name:var(--font-instrument-serif)] font-normal text-[#e2e8f0] drop-shadow-lg">
            Git Profiles,<br />
            instantly switched.
          </h1>
          <div className="mt-12 flex items-center gap-4 text-[#cbd5e1] text-xl font-medium">
            <span>Available on:</span>
            <div className="flex gap-6 items-center">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Download for macOS via Polar">
                <svg width="24" height="24" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM234.5 106.6c20.3-25.1 31.9-55.5 28.5-86.6-26.6 1.1-57.8 17.6-78.6 42.1-18.2 21.4-31 51.5-27.2 81.4 29.8 2.2 57.3-13.6 77.3-36.9z" /></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Download for Windows via Polar">
                <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Features Section - Bento Grid */}
        <div className="mt-32 w-full">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
            <FeatureCard
              className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between bg-[#fde047]"
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>}
              title="Lightning Fast"
              description="Built with Rust and Tauri v2 for a native, lightweight, and incredibly fast desktop experience. Experience zero latency when switching profiles, with memory footprint measured in megabytes instead of gigabytes."
            />
            <FeatureCard
              className="lg:col-span-1 lg:row-span-1 bg-[#c084fc]"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" /></svg>}
              title="Tray Menu Integration"
              description="Lives quietly in your menu bar or system tray. Switch your active Git profile with just two clicks without opening the terminal."
            />
            <FeatureCard
              className="lg:col-span-1 lg:row-span-1 bg-[#67e8f9]"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>}
              title="Signing Keys"
              description="Manage SSH or GPG signing keys for each profile seamlessly."
            />
            <FeatureCard
              className="sm:col-span-2 lg:col-span-2 lg:row-span-1 bg-white"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>}
              title="Local & Secure"
              description="Your configuration never leaves your machine. GHSwitch securely edits your local ~/.gitconfig without any telemetry, tracking, or cloud syncing."
            />
            <FeatureCard
              className="lg:col-span-1 lg:row-span-1 bg-[#86efac]"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>}
              title="Auto Start"
              description="Launch automatically on startup so your profiles are always ready."
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 w-full max-w-3xl mx-auto">
          <h2 className="mb-12 text-center text-4xl font-black uppercase text-slate-900 drop-shadow-sm">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            <FaqItem
              question="Does this overwrite my entire global gitconfig?"
              answer="Not at all. GHSwitch only modifies the specific user.name, user.email, and user.signingkey fields in your ~/.gitconfig. The rest of your configuration remains exactly as you left it."
            />
            <FaqItem
              question="Is my configuration sent to any servers?"
              answer="No. GHSwitch is a 100% local, offline tool. There is no telemetry, no tracking, and your configurations never leave your machine."
            />
            <FaqItem
              question="How do I add a new profile?"
              answer="Just click 'Open Settings' from the tray menu. You'll get a clean interface to add, edit, or remove profiles and their associated signing keys."
            />
            <FaqItem
              question="Is Linux supported?"
              answer="GHSwitch is fully compatible with macOS and Windows. Linux support may be added in future releases."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 font-bold text-sm text-slate-600">
        Built with ❤️ by Neha & <a href="https://achuth.dev" target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-slate-900">Achuth</a>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, className = "" }: { icon: React.ReactNode; title: string; description: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl border-4 border-slate-900 p-8 shadow-[6px_6px_0_0_#0f172a] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0_0_#0f172a] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none cursor-pointer ${className}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-4 border-slate-900 bg-white shadow-[4px_4px_0_0_#0f172a]">
        {icon}
      </div>
      <div className="mt-auto pt-4">
        <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-800 font-medium leading-relaxed sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border-4 border-slate-900 bg-white p-6 shadow-[6px_6px_0_0_#0f172a] transition-all open:bg-slate-50 cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#0f172a]">
      <summary className="flex items-center justify-between text-xl font-black text-slate-900 list-none [&::-webkit-details-marker]:hidden">
        {question}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-4 border-slate-900 bg-slate-100 shadow-[2px_2px_0_0_#0f172a] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#ff5e5e] group-open:text-slate-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </summary>
      <p className="mt-6 text-slate-700 font-medium leading-relaxed text-lg border-t-4 border-slate-200 pt-4">
        {answer}
      </p>
    </details>
  );
}
