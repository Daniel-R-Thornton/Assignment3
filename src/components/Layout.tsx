import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  // return the outlet of the layout
  return (
    <div>
      {/* simple Top bar, and main content using tailwind classes for styling*/}

      <div className="flex items-center justify-between bg-gray-900 px-10 py-6 text-gray-100">
        <h1 className="text-3xl font-semibold">Daniel{"'"}s Shop</h1>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'rounded px-3 py-2 bg-gray-700'
                : 'rounded px-3 py-2 text-gray-300 hover:bg-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Adoptions"
            className={({ isActive }) =>
              isActive
                ? 'rounded px-3 py-2 bg-gray-700'
                : 'rounded px-3 py-2 text-gray-300 hover:bg-gray-700'
            }
          >
            Adoptions
          </NavLink>
          <NavLink
            to="/ShopProducts"
            className={({ isActive }) =>
              isActive
                ? 'rounded px-3 py-2 bg-gray-700'
                : 'rounded px-3 py-2 text-gray-300 hover:bg-gray-700'
            }
          >
            Cat Toys And Enrichment
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'rounded px-3 py-2 bg-gray-700'
                : 'rounded px-3 py-2 text-gray-300 hover:bg-gray-700'
            }
          >
            About
          </NavLink>
        </div>
      </div>
      <div
        className="bgLeaves h-full "
        style={{ height: 'calc(100vh - 90px)' }}
      >
        <Outlet />
      </div>
    </div>
  )
}
