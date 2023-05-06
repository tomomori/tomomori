import { Link } from "react-router-dom";

const Navi = () => {
    return (
        <div className="row">
        <header className="navbar navbar-expand navbar-light bg-light flex-column flex-md-row bd-navbar">
          <a className="navbar-brand mr-0 mr-md-2" href="#" aria-label="tomomori">
            <img src="/tm048.png" width="36" height="36" className="d-block" />
          </a>
          <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='/md'>Documentation</Link>
                </li>
              </ul>
          </div>
        </header>
      </div>
    );
};

export default Navi;