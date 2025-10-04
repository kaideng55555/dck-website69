import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
      <header className="text-center p-6">
        <img src="/goldie-header.png" alt="Goldie" className="w-48 mx-auto mb-4" />
        <h1 className="text-6xl font-extrabold text-purple-400 drop-shadow-lg graffiti">
          DIGITAL CURRENCY KID$
        </h1>
        <p className="mt-2 text-zinc-400">Street-born • Chain-bound • The Crew is Here</p>
      </header>

      <main className="p-6 max-w-3xl text-center">
        <section id="crew" className="my-12">
          <h2 className="text-4xl mb-6 text-green-400">The Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/goldie.png" alt="Goldie" className="w-40 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Goldie</h3>
              <p className="text-zinc-400">Gold-plated brain, diamond hands. The visionary with the plan.</p>
            </div>
            <div>
              <img src="/silver.png" alt="Thic Silver" className="w-40 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Thic Silver</h3>
              <p className="text-zinc-400">Curves and courage. Spray can in one hand, ledger in the other.</p>
            </div>
            <div>
              <img src="/bronze.png" alt="Big Bronze" className="w-40 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Big Bronze</h3>
              <p className="text-zinc-400">Heavy hitter. Grounded, unshakable, always holding down the block.</p>
            </div>
            <div>
              <img src="/dimez.png" alt="Dimez" className="w-40 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Dimez</h3>
              <p className="text-zinc-400">Slick with numbers, sharp with hustle. Fastest tagger in the crew.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-6 text-zinc-500 text-sm border-t border-zinc-700">
        Adults only. Not financial advice. DYOR.
      </footer>
    </div>
  )
}
