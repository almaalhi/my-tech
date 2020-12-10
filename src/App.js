import { useContext } from 'react';
import DropdownContext from './context/dropdown/dropdownContext';
import { HiOutlineHome } from 'react-icons/hi';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { HiOutlineChevronUp } from 'react-icons/hi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import NavItem from './components/navigation/NavItem';
import DropdownMenu from './components/navigation/DropdownMenu';
import DropdownItem from './components/navigation/DropdownItem';
import Home from './components/content/Home';
import Pint from './components/content/Pint';
import Brompton from './components/content/Brompton';
import TeenageEngineering from './components/content/TeenageEngineering';

function App() {
  const dropdownContext = useContext(DropdownContext);

  return (
    <Router>
      <Navbar>
        <NavItem icon={<HiOutlineHome />} linkName='/' />
        <NavItem
          icon={
            dropdownContext.open ? (
              <HiOutlineChevronDown />
            ) : (
              <HiOutlineChevronUp />
            )
          }
        >
          <DropdownMenu>
            <DropdownItem linkName='pint'>Onewheel Pint</DropdownItem>
            <DropdownItem linkName='brompton'>Brompton</DropdownItem>
            <DropdownItem linkName='opz'>OP-Z</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </Navbar>
      <Switch>
        <div className='mainContent'>
          <Route path='/' exact component={Home} />
          <Route path='/pint' component={Pint} />
          <Route path='/brompton' component={Brompton} />
          <Route path='/opz' component={TeenageEngineering} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
