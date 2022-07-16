import { Account } from "appwrite";
import { useEffect } from "react";
import { useAppwrite } from "../hooks/useAppwriteAccount";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const { user, deleteSessions } = useAppwrite();

  return (
    <>
      <header>
        <div className="navbar bg-base-100">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Dev Rel Social</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a>Item 1</a>
              </li>
              <li key="0">
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-primary m-1">
                  {user.name}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52"
                >
                  <li>
                    <a onClick={() => deleteSessions()}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <a href="/api/auth/login" className="btn btn-primary">
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <main>
        <>{children}</>
      </main>
      <footer></footer>
    </>
  );
};
