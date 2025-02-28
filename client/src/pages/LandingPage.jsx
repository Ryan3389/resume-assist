import { Link } from "react-router-dom"
function LandingPage() {
    return (
        <section className="hero-section main-section">
            <article className="cta-container">
                <h1>Optimize Your Resume, Land More Interviews</h1>
                <p>Submit your resume, get AI generated feedback, and educational resouces for self improvement</p>
                <Link to={'/resume'} className="resume-btn cta-btn">Upload Resume</Link>
                <Link to={'/features'} className="features-btn cta-btn">Features</Link>
            </article>
        </section>
    )
}

export default LandingPage