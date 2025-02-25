import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload, faComments, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import FeaturesCard from "../components/FeaturesCard"
function FeaturesPage() {
    return (
        <section className="main-section features-section">
            <h1>Why Choose This Tool ?</h1>
            <Link to='/resume' className='cta-upload-btn'>Upload your resume</Link>
            <div className="features-container">
                <span className='icon-container'>
                    <FontAwesomeIcon icon={faUpload} color='#4F46E5' className='font-icon' />
                    <p className='font-text'>Upload your Resume</p>
                </span>
                <span className='icon-container'>
                    <FontAwesomeIcon icon={faComments} color='#4F46E5' className='font-icon' />
                    <p className='font-text'>AI generated Feedback</p>
                </span>
                <span className='icon-container'>
                    <FontAwesomeIcon icon={faCircleCheck} color='#4F46E5' className='font-icon' />
                    <p className='font-text'>Increased Confidence</p>
                </span>

            </div>
        </section>
    )
}

export default FeaturesPage
