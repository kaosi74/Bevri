import pic11 from "../images/pic11.jpg";
import logo from "../images/logo.png";
import pic1 from "../images/pic1.jpg";
import pic3 from "../images/pic3.jpg";
import pic2 from "../images/pic2.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic10 from "../images/pic10.jpg";
export default function Menu() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} width={50} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Groups">
                    Groups
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* main section */}
      <div className="container-fluid menus py-5 bg-dark text-white">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="imgs mt-5" src={pic3} />
          </div>
          <div className="col-sm-12 col-md-6 txt">
            <p className="text">Beautiful food</p>
            Georgian Experience in Palo Alto and Los Altos, Ca
          </div>
        </div>
        <button className="col col-md-6 btn btn-success order-btns">
          Order
        </button>
      </div>
      {/* Second section */}
      <div className="container-fluid text-center px-0 mx-0 mt-4">
        <h4 className="display-6">Bevri Menu</h4>
        <p>Beautiful food designed over centuries.</p>
        <div className="row menu-imgs1">
          <div className="col-sm-12 col-md-4 cont">
            <img src={pic11} />
            <p className="centered">Small Plates</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
          <div className="col-sm-12 col-md-4 cont">
            <img src={pic1} />
            <p className="centered">Soups and Salads</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
          <div className="col-sm-12 col-md-4 cont">
            <img src={pic3} />
            <p className="centered">Essentials</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
        </div>
        <div className="row menu-imgs">
          <div className="col-sm-12 col-md-3 cont">
            <img src={pic2} />
            <p className="centered">Meat and Fish</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
          <div className="col-sm-12 col-md-3 cont">
            <img src={pic5} />
            <p className="centered">White & Amber Wine</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
          <div className="col-sm-12 col-md-3 cont">
            <img src={pic10} />
            <p className="centered">Red Wine</p>
            <button className="centre btn btn-dark">Shop now</button>
          </div>
          <div className="col-sm-12 col-md-3 cont">
            <img src={pic6} />
            <p className="centered">Soups and salads</p>Deserts
            <button className="centre btn btn-dark">Shop now</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-5 mb-3">
              <img src={logo} width={70} className="mb-3" />
              <ul className="nav flex-row justify-content-evenly">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/Menu" className="nav-link p-0 text-muted">
                    Menu
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/Groups" className="nav-link p-0 text-muted">
                    Groups
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what&lsquo;s new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© {currentYear} Bevri, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-facebook text-primary"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-x-twitter text-info"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-instagram text-danger"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-linkedin text-success"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
