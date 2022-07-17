import { Account } from "appwrite";
import { useEffect } from "react";
import { useAppwrite } from "../hooks/useAppwriteAccount";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const { user, deleteSessions, createSession } = useAppwrite();

  return (
    <div className="m-1 lg:m-4 grid gap-1 lg:gap-4">
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
              <div className="dropdown dropdown-end dropdown-hover">
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
              <a className="btn btn-primary" onClick={() => createSession()}>
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <main className="">
        <>{children}</>
      </main>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};
