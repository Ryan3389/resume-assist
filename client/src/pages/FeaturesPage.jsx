import { Link } from 'react-router-dom'
import FeaturesCard from "../components/FeaturesCard"
function FeaturesPage() {
    return (
        <section className="main-section features-section">
            <h1>Why Choose This Tool ?</h1>
            <Link className='cta-upload-btn'>Upload your resume</Link>
            <div className="features-container">
                <FeaturesCard
                    title="Upload your resume, AI will do the rest"
                    pointOne="AI reviews your resume"
                    pointTwo="generate personalized feedback"
                    pointThree="Land your dream job faster"
                />
                <FeaturesCard
                    title="Interview Prep"
                    pointOne="Get 10 interview questions tailored to your resume"
                    pointTwo="Practice makes perfect - helping you study faster"
                    pointThree="Ace your next interview"
                />
                <FeaturesCard
                    title="Be Prepared"
                    pointOne="Experience an increased confidence knowing you studied the correct material"
                    pointTwo="Submit your resume today and see the benefits"

                />

            </div>
        </section>
    )
}

export default FeaturesPage