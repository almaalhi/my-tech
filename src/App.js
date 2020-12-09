import DropdownState from './context/dropdown/DropdownState';
import { HiOutlineHome } from 'react-icons/hi';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import NavItem from './components/navigation/NavItem';
import DropdownMenu from './components/navigation/DropdownMenu';
import DropdownItem from './components/navigation/DropdownItem';
import Home from './components/content/Home';
import Pint from './components/content/Pint';

function App() {
  return (
    <DropdownState>
      <Router>
        <Navbar>
          <NavItem icon={<HiOutlineHome />} linkName='/' />
          <NavItem icon={<HiOutlineChevronDown />}>
            <DropdownMenu>
              <DropdownItem linkName='Pint'>Onewheel Pint</DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Navbar>
        <Switch>
          <div className='mainContent'>
            <Route path='/' exact component={Home} />
            <Route path='/pint' component={Pint} />
          </div>
        </Switch>
      </Router>
    </DropdownState>
  );
}

export default App;
