import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <nav>
                <p className='title'>ResumePro</p>
                <span className='nav-links'>
                    <Link className='home-btn btn' to={'/'}>Home</Link>
                    <Link className='login-btn btn' to={'/login'}>Login</Link>
                    <Link className='signup-btn btn' to={'/signup'}>Signup</Link>
                </span>
            </nav>
        </header>

    )
}

export default Navbar

