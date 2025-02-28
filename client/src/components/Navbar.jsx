import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
function Navbar() {
    const { isLoggedIn, logout } = useAuth()
    return (
        <header>
            <nav>
                <p className='title'>ResumePro</p>
                <span className='nav-links'>
                    {isLoggedIn ? (
                        <>
                            <Link className='home-btn btn' to={'/'}>Home</Link>
                            <Link className='login-btn btn' onClick={logout}>Logout</Link>
                        </>
                    ) :
                        <>
                            <Link className='home-btn btn' to={'/'}>Home</Link>
                            <Link className='login-btn btn' to={'/login'}>Login</Link>
                            <Link className='signup-btn btn' to={'/signup'}>Signup</Link>
                        </>
                    }
                </span>
            </nav>
        </header>

    )
}

export default Navbar

