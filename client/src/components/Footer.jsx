import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Link>ResumePro</Link>
                <span className="footer-links">
                    <Link>Home</Link>
                    <Link>GitHub</Link>
                    <Link>Portfolio</Link>
                </span>

                <Link>Copyright &copy; Ryan Cuthbert</Link>

            </div>


        </footer>
    )
}

export default Footer