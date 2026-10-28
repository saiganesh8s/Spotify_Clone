import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/siderbar.jsx';
import Footer from '../Footer/footer.jsx';
import Playlist from '../playlistpage/playlist.jsx';
const Home = () => {
    const [searchInput, setSearchInput] = useState('');

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-[1600px] items-center gap-3">
          <Link to="/home" aria-label="Go to home" className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1ed760] text-black">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.75.75 0 0 1-1.03.25 8.53 8.53 0 0 0-7.12-.85.75.75 0 1 1-.44-1.43 10.02 10.02 0 0 1 8.34 1 .75.75 0 0 1 .25 1.03Zm1.2-2.67a.9.9 0 0 1-1.23.3 10.38 10.38 0 0 0-8.67-1.04.9.9 0 1 1-.53-1.72 12.18 12.18 0 0 1 10.13 1.22.9.9 0 0 1 .3 1.24Zm.1-2.78a.98.98 0 0 1-1.35.33 12.68 12.68 0 0 0-10.59-1.27.98.98 0 1 1-.58-1.87 14.63 14.63 0 0 1 12.2 1.47.98.98 0 0 1 .33 1.34Z" />
              </svg>
            </span>
            <span className="hidden text-lg font-bold tracking-tight sm:block">Spotify</span>
          </Link>
          <Link
            to="/home"
            aria-label="Home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-gray-300 transition hover:bg-[#2a2a2a] hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
              <path d="m12 3 9 8h-3v9h-5v-6h-3v6H5v-9H3l9-8Z" />
            </svg>
          </Link>
          <label className="ml-auto flex h-11 w-full max-w-xl items-center gap-3 rounded-full bg-[#1f1f1f] px-4 text-gray-400 transition focus-within:ring-2 focus-within:ring-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-5 w-5 shrink-0">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              type="search"
              placeholder="What do you want to play?"
              aria-label="Search playlists"
              onChange={handleInput}
              value={searchInput}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
            />
          </label>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 p-3 sm:p-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar />
        <section className="min-w-0 rounded-xl bg-gradient-to-b from-[#242424] to-[#171717] p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1ed760]">Made for you</p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured playlists</h1>
            <p className="mt-2 text-sm text-gray-400">Find a soundtrack for every mood.</p>
          </div>
          <Playlist searchInput={searchInput} />
        </section>
      </main>
      <div className="mx-auto max-w-[1600px]">
        <Footer />
      </div>
    </div>
  )
}

export default Home
