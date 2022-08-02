import "./index.css"
import { Link } from 'react-router-dom';
import linkIcon from '../../../Image/link.svg';

export default function Navbar() {
    return (
        <div className="navbar_container_wrapper">

            <div className="navbar_container">
                <div className="left_nav">
                    <Link to="/home"><span>0x</span>PULSE</Link>
                </div>
                <div className="right_nav">
                    <a href="#connect" target="_blank" rel="noopener noreferrer">MARKETPLACE
                        <img src={linkIcon} alt="link" />
                    </a>
                </div>
            </div>
        </div>

    )
}
