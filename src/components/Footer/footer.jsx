import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
    <div>
      <h4 className="font-bold text-white mb-3">Company</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Jobs</a></li>
        <li><a href="#" className="hover:underline">For the Record</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-white mb-3">Communities</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">For Artists</a></li>
        <li><a href="#" className="hover:underline">Developers</a></li>
        <li><a href="#" className="hover:underline">Advertising</a></li>
        <li><a href="#" className="hover:underline">Investors</a></li>
        <li><a href="#" className="hover:underline">Vendors</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-white mb-3">Useful links</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Support</a></li>
        <li><a href="#" className="hover:underline">Free Mobile App</a></li>
        <li><a href="#" className="hover:underline">Popular by Country</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-white mb-3">Spotify Plans</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Premium Individual</a></li>
        <li><a href="#" className="hover:underline">Premium Duo</a></li>
        <li><a href="#" className="hover:underline">Premium Family</a></li>
        <li><a href="#" className="hover:underline">Premium Student</a></li>
        <li><a href="#" className="hover:underline">Spotify Free</a></li>
      </ul>
    </div>
    <div>
      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#1ed760] text-black" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.75.75 0 0 1-1.03.25 8.53 8.53 0 0 0-7.12-.85.75.75 0 1 1-.44-1.43 10.02 10.02 0 0 1 8.34 1 .75.75 0 0 1 .25 1.03Zm1.2-2.67a.9.9 0 0 1-1.23.3 10.38 10.38 0 0 0-8.67-1.04.9.9 0 1 1-.53-1.72 12.18 12.18 0 0 1 10.13 1.22.9.9 0 0 1 .3 1.24Zm.1-2.78a.98.98 0 0 1-1.35.33 12.68 12.68 0 0 0-10.59-1.27.98.98 0 1 1-.58-1.87 14.63 14.63 0 0 1 12.2 1.47.98.98 0 0 1 .33 1.34Z" />
        </svg>
      </span>
      <h1 className='font-bold text-white mb-3'>SPOTIFY</h1>
      <p className='text-gray-400'>Listen to what you love.</p>
    </div>
  </div>
  <hr className="border-gray-800 mt-10" />
</footer>
      
    </div>
  )
}

export default Footer
