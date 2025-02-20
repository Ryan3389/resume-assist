import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <nav>
                <p className='title'>ResumePro</p>
                <span className='nav-links'>
                    <Link className='home-btn btn'>Home</Link>
                    <Link className='login-btn btn'>Login</Link>
                    <Link className='signup-btn btn'>Signup</Link>
                </span>
            </nav>
        </header>

    )
}

export default Navbar

