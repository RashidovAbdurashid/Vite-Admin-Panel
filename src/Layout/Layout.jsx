import React from 'react'

function Layout() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 text-slate-200 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-wider text-indigo-400">
          AdminVite
        </span>
      </div>

      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>
          <a
            href="/"
            className="px-3 py-2 rounded-md bg-indigo-600 text-white transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/profile"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="/users"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
          >
            Users
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/carts"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
          >
            Carts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Layout
