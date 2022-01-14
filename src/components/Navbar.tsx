import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                CoreFlex Solution
            </div>
            <div className="navbar-right">
                <ul>
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            Contact
                        </li>
                    </Link>
                    <Link to="/countries">
                        <li>
                            Countries
                        </li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
