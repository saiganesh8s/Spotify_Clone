import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Playlist = ({ searchInput }) => {
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const filteredData = playlist.filter((eachItem) =>
    (eachItem?.name || "").toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const response = await fetch('https://apis2.ccbp.in/spotify-clone/featured-playlists');
        if (!response.ok) {
          throw new Error(`Playlist request failed with status ${response.status}`);
        }
        const jsonData = await response.json();
        setPlaylist(jsonData.playlists?.items || []);
      } catch (error) {
        console.error('Error fetching playlist:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlaylist();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-gray-300" role="status">
        <span className="h-9 w-9 animate-spin rounded-full border-4 border-[#1ed760] border-t-transparent" />
        <p>Loading playlists…</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <p className="rounded-lg bg-[#242424] p-6 text-center text-gray-300" role="alert">
        Playlists couldn’t be loaded right now. Please try again later.
      </p>
    );
  }

  if (filteredData.length === 0) {
    return (
      <p className="rounded-lg bg-[#242424] p-6 text-center text-gray-300">
        {searchInput ? `No playlists found for “${searchInput}”.` : 'No playlists are available right now.'}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {filteredData.map((eachItem) => (
        <article
          key={eachItem.id}
          className="group relative min-w-0 rounded-xl bg-[#181818] p-3 transition duration-200 hover:bg-[#282828] focus-within:bg-[#282828]"
        >
          <Link
            to={`/playlist/${eachItem.id}`}
            aria-label={`Open ${eachItem.name}`}
            className="absolute inset-0 z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1ed760]"
          />
          <div className="relative">
            <img
              src={eachItem.images?.[0]?.url}
              alt=""
              loading="lazy"
              className="aspect-square w-full rounded-lg bg-[#2a2a2a] object-cover shadow-lg"
            />
            <span className="absolute bottom-2 right-2 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 h-5 w-5">
                <path d="M7 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 truncate font-bold text-white">{eachItem.name}</h2>
          <p className="mt-1 truncate text-sm text-gray-400">
            By {eachItem.owner?.display_name || 'Spotify'}
          </p>
          <p className="mt-2 text-xs text-gray-400">
            <span aria-hidden="true" className="mr-1 text-[#1ed760]">♫</span>
            {eachItem.tracks?.total ?? 0} tracks
          </p>
        </article>
      ))}
    </div>
  );

};
export default Playlist;