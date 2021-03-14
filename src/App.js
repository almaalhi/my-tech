import { useContext } from "react";
import DropdownContext from "./context/dropdown/dropdownContext";
import CountryProvider from "./context/country/CountryProvider";
import { HiOutlineHome, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import NavItem from "./components/navigation/NavItem";
import DropdownMenu from "./components/navigation/DropdownMenu";
import DropdownItem from "./components/navigation/DropdownItem";
import Home from "./components/content/Home";
import Pint from "./components/content/Pint";
import Brompton from "./components/content/Brompton";
import TeenageEngineering from "./components/content/TeenageEngineering";
import CountryApp from "./components/content/CountryApp";
import Footer from "./components/footer/Footer";

const App = () => {
  const dropdownContext = useContext(DropdownContext);

  return (
    <CountryProvider>
      <Router>
        <Navbar>
          <NavItem icon={<HiOutlineHome />} linkName="/" />
          <NavItem
            icon={dropdownContext.open ? <HiOutlineX /> : <HiOutlineMenu />}
          >
            <DropdownMenu>
              <DropdownItem linkName="pint">Onewheel Pint</DropdownItem>
              <DropdownItem linkName="brompton">Brompton</DropdownItem>
              <DropdownItem linkName="opz">OP-Z</DropdownItem>
              <DropdownItem linkName="country">
                Country Information App
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Navbar>
        <Switch>
          <div className="main-content-div">
            <Route path="/" exact component={Home} />
            <Route path="/pint" component={Pint} />
            <Route path="/brompton" component={Brompton} />
            <Route path="/opz" component={TeenageEngineering} />
            <Route path="/country" component={CountryApp} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </CountryProvider>
  );
};

export default App;
