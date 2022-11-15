import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{display: "flex", gap: "35px", justifyContent: "center"}}>
          <li>
            <Link to="/">Dots</Link>
          </li>
          <li>
            <Link to="/synonyms">Synonyms</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
