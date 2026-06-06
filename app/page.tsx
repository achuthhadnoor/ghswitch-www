import Image from "next/image";
import AppIcon from "./assets/app-icon.png";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#e8e8e3] text-slate-900">

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d4d4d0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

      <main className="z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24 sm:px-12 md:py-32">

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 rounded-2xl border-4 transition-all ">
            <Image
              src={AppIcon}
              alt="GHSwitch Icon"
              width={80}
              height={80}
              priority
              className="rounded-xl"
            />
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-slate-900 sm:text-7xl drop-shadow-sm">
            Git Profiles, <br className="hidden sm:block" /> instantly switched.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-700 sm:text-xl">
            Stop fumbling with terminal commands and local configs. Manage and switch your Git identities and signing keys directly from your macOS menu bar or Windows system tray.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/achuthhadnoor/ghswitch-www/releases/latest"
              className="group flex items-center justify-center gap-3 rounded-xl border-4 border-slate-900 bg-[#ff5e5e] px-8 py-4 text-lg font-bold text-slate-900 shadow-[6px_6px_0_0_#0f172a] transition-all active:translate-x-[6px] active:translate-y-[6px] active:shadow-none hover:-translate-y-1 hover:shadow-[6px_10px_0_0_#0f172a]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              Download
            </a>

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
        <div className="mt-32 w-full max-w-3xl">
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
        Built with ❤️ by <a href="https://achuth.dev" target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-slate-900">Achuth</a>
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
