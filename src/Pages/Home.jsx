import pic4 from "../images/pic4.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic1 from "../images/pic1.jpg";
import logo from "../images/logo.png";
import georgia from "../images/georgia.jpg";
export default function Home() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img width={60} src={logo} />
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
      {/* Main body section starts */}

      <div className="container-fluid bevri py-5 text-white bg-dark mt-3">
        <div className="row">
          {/* logo siv */}
          <div className="logo">
            <img width={300} src={logo} />
          </div>
          <div className="h1 mt-2">
            Georgian Food and Wine Experience in San Francisco Bay Area
          </div>
          <div>
            <p>
              Bevri (which means &rdquo;a&apos;lot&rdquo; in Georgian) is a
              Georgian restaurant, famous for it&apos;s hot goeoey cheese bread
              khachapuri, juicy and flavorful dumplings khinkali, mouth-watering
              grilled meats and, of course, unique, luscious georgian wines.
            </p>
            <p>
              Ready to try our satisfying Georgian food and gorgeous wine? Find
              us in Downtown Polo Alto or Los Altos (reservations recommended)
              or order delivery.
            </p>
            <button className="btn btn-outline-secondary home-btn">Menu</button>
          </div>
        </div>
      </div>
      {/* New section */}

      <div className="container-fluid home-img">
        <h3 className="text-center mt-2">Discover Georgian Cuisine</h3>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={pic4} />
          </div>
          <div className="col-sm-12 col-md-4">
            <img src={pic9} />
          </div>
          <div className="col-sm-12 col-md-4">
            <img src={pic8} />
          </div>
        </div>
      </div>
      {/* New container */}

      <div className="container home-cont">
        <button className="btn btn-dark">Book a Table</button>
        <div className="row mb-4">
          <div className="col-md-6">
            <h3>Georgia</h3>
            <p>
              Georgia (Sakartvelo), a country at the intersection of Europe and
              Asia, is resting high in the Caucasus mountains. It lays on the
              shore of the Black Sea, between Turkey and Russia. Thanks to
              it&apos;s location, Georgia has been influenced by a variety of
              eastern and western civilizations, resulting in a unique cultural
              heritage.
            </p>
            <button className="btn btn-dark mb-2">Read more</button>
          </div>
          <div className="col-md-6">
            <img src={georgia} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={pic1} />
          </div>
          <div className="col-md-6">
            <h3>Georgia Wines</h3>
            <p>
              &rdquo;Georgia uses methods of wine making that you couldn&apos;t
              invent in the modern world; you could only inherit them through
              the mists of time...&rdquo; Oz Clarke
            </p>
            <button className="btn btn-dark">Shop now</button>
          </div>
        </div>
        <hr/>
      </div>
      {/*  */}
      <div className="container-fluid mt-5 delivery-cont">
        <img className="delivery-img" src={pic9} />
        <div className="delivery-cont-txt">
          <h4>Take it home</h4>
          <h3>We Deliver</h3>
          <button className="btns">Delivery</button>
          <button className="btns">Pickup</button>
        </div>
      </div>
      {/* Footer */}
      <div className="container-fluid text-center home-footer">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <h4>Hours</h4>
            <h5>Tuesday - Sunday.</h5>
            <p>11:30 am - 9pm</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h4>Palo Alto</h4>
            <p>
              335 University Ave,
              <p>Palo Alto, CA</p>
            </p>
            <p>(650) 600-0433</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h4>Los Altos</h4>
            <p>
              325 Main St,
              <p>Los Altos, CA</p>
            </p>
            <p>(650) 753-8056</p>
          </div>
          <div className="col-sm-12 col-md-3 pb-5">
            <h4> More contacts</h4>
            <div className="footer-social">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
