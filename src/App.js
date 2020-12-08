import Navbar from './components/navigation/Navbar';
import NavItem from './components/navigation/NavItem';
import Home from './components/content/Home';
import Pint from './components/content/Pint';
import { HiOutlineHome } from 'react-icons/hi';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar>
        <NavItem icon={<HiOutlineHome />} linkName='/' />
        <NavItem icon={<HiOutlineChevronDown />} linkName='Pint' />
      </Navbar>
      <Switch>
        <div className='mainContent'>
          <Route path='/' exact component={Home} />
          <Route path='/pint' component={Pint} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
