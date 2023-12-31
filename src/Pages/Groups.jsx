import Calendar from "react-calendar";
import "../App.css";
import "react-calendar/dist/Calendar.css";
import { useCallback, useState } from "react";
import logo from "../images/logo.png"
import dining from "../images/dining.jpg"

export default function Groups() {
  const [value, setValue] = useState(new Date());
  const onChange = useCallback(
    (value) => {
      setValue(value)
    }, [setValue]
  )
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} width={60}/>
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
      {/* End of Navbar */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Group Dinning at Bevri</h1>
            <p>
              Georgian food and wine are particularly enjoyable when shared with
              family and friends. We&rsquo;ve created family-style menu, so you
              can skip spending valuable party time on menu browsing and start
              enjoying your event right away.
            </p>
            <p>
              The menu covers the most popular Georgian dishes. Pair them with
              Georgian wine or other drinks for the complete experience.
            </p>
            <p>
              If you choose to create your own combination from our menu,
              we&rsquo;ll be happy to serve it too.
            </p>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div className="container">
        <img className="group-img" src={dining} />
      </div>
      {/* Another section */}

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <p>
              We offer group dining for up to 40 guests in Los Altos and 12
              guests in Palo Alto. The menu covers all the essential dishes. For
              the complete Georgian experience, ask our team for the
              recommendations.
            </p>
            <ul>
              <li>Pkhali</li>
              <li>Chicken Liver Pate (also available: Gebjalia)</li>
              <li>Georgian Salad</li>
              <li>Khinkali (beef & pork or lamb)</li>
              <li>Khachapuri Adjaruli (also available: Khachapuri Imeruli)</li>
              <li>
                Chicken Mtsvadi (also available: Pork Mtsvadi or Ajapsandali)
              </li>
              <li>
                Pork Chalaghaji (also available: Chicken Tapaka or Kalmakhi)
              </li>
              <li>GGlaze Dessert Bar (also available: Napoleon Cake)</li>
              <li>Soft Drink: Borjomi, Perrier, Georgian Soda</li>
            </ul>
            {/* End of list */}
            <p>$65 per person</p>
            <p>
              Reach out to us at eat@bevri.com if you have any special requests.
            </p>
          </div>
        </div>
      </div>

      {/* New section */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <Calendar value={value} onChange={onChange} />
            </div>
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
          <p>© 2023 Bevri, Inc. All rights reserved.</p>
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
