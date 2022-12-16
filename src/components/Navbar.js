import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className='nav'>
        <Link to='/' className='site-title'>Malek Mekdashi</Link>
        <ul>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
}