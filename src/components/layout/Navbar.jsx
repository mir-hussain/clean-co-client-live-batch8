import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className=" w-full max-w-[1200px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <div className="flex gap">
          {/* Navbar menu content here */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Contact
          </NavLink>
          {user?.email ? (
            <button className="btn btn-ghost btn-sm" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
