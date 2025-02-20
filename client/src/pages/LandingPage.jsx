import { Link } from "react-router-dom"
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="cta-container">
                <h1>Optimize Your Resume, Land More Interviews</h1>
                <p>Submit your resume, get AI generated feedback, and educational resouces for self improvement</p>
                <Link className="resume-btn">Upload Resume</Link>
            </article>
        </section>
    )
}

export default LandingPage