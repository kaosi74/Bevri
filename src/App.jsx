import "./App.css";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import Groups from "./Pages/Groups";
import Catering from "./Pages/Catering";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/Menu":
      component = <Menu />
      break
    case "/Reservations":
      component = <Reservations />
      break
    case "/Groups":
      component = <Groups />
      break
    case "/Catering":
      component = <Catering/>
  }
  return (
    <div>
      {component}
    </div>
  )
}
