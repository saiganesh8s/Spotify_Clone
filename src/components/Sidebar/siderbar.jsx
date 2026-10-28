import React from 'react'
import { Link } from 'react-router-dom';




function Siderbar() {
  return (
    <aside className="h-fit rounded-xl bg-[#181818] p-5 text-white shadow-lg lg:sticky lg:top-20">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold">Your Library</h2>
        <span aria-hidden="true" className="text-2xl leading-none text-gray-400">+</span>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg bg-[#242424] p-4">
          <h3 className="font-semibold">Explore by genre</h3>
          <p className="mt-1 text-sm text-gray-300">Find something new to love.</p>
          <Link
            to="/BrowseGenres"
            className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-105 hover:bg-[#1ed760]"
          >
            Browse genres
          </Link>
        </div>
        <div className="rounded-lg bg-[#242424] p-4">
          <h3 className="font-semibold">Fresh music, every week</h3>
          <p className="mt-1 text-sm text-gray-300">Catch up on the latest releases.</p>
          <Link
            to="/newreleases"
            className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-105 hover:bg-[#1ed760]"
          >
            New releases
          </Link>
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <Link
          to="/LikedSongsPage"
          className="rounded-full bg-[#2a2a2a] px-4 py-3 text-sm font-semibold transition hover:bg-[#3a3a3a]"
        >
          💕 Liked songs
        </Link>
        <Link
          to="/YourPlaylists"
          className="rounded-full bg-[#2a2a2a] px-4 py-3 text-sm font-semibold transition hover:bg-[#3a3a3a]"
        >
          🎶 Your playlists
        </Link>
      </div>
      <p className="mt-5 text-xs text-gray-500">Music for every moment.</p>
    </aside>
  )
}
export default Siderbar
