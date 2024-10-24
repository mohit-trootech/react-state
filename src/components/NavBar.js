/**Nav Bar Component Using Tailwind CSS */
import { FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";
import Options from "./ThemeOptions";
import utils from "../utils/utils";
function NavBar() {
  /**NavBar DaisyUI Component */
  let [theme, setTheme] = useState(utils.getLocalStorage("theme") || "light");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);

  const updateTheme = (event) => {
    setTheme((theme = event.target.value));
    utils.updateLocalStorage("theme", theme);
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="hover:animate-spin btn btn-ghost btn-circle"
            >
              <FaReact className="text-2xl" />
            </div>
            <ul
              tabIndex="0"
              className="menu border menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/counter">Counter</a>
              </li>
              <li>
                <a href="/todos">Todos</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" href="/">
            React States
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <select
              className="select select-sm select-bordered w-full max-w-xs"
              value={theme}
              onChange={(event) => {
                updateTheme(event);
              }}
            >
              <Options />
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;