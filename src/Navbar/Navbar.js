import './Navbar.css';
import { Helmet } from 'react-helmet';
import Logo from './Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <input type="checkbox" name="" id="check" />
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
      <label className="logo"><img src={Logo} /></label>  
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><a herf="#">Voting</a></li>
          <li><Link to="/sessions">Sessions</Link></li>
          <li><Link to="/gettoknowus">About</Link></li>
      </ul>
      <Helmet>
     <script src="https://kit.fontawesome.com/a076d05399.js"></script>
     </Helmet>
        </nav>
    );
}
 
export default Navbar;