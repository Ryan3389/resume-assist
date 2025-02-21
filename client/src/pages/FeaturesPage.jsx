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
                    <p className='font-text'>Recieve AI generated Feedback</p>
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
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUpload, faComments, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import FeaturesCard from "../components/FeaturesCard"
// function FeaturesPage() {
//     return (
//         <section className="main-section features-section">
//             <h1>Why Choose This Tool ?</h1>
//             <Link className='cta-upload-btn'>Upload your resume</Link>
//             <div className="features-container">
//                 <FeaturesCard
//                     title="Upload your resume, AI will do the rest"
//                     pointOne="AI reviews your resume"
//                     pointTwo="generate personalized feedback"
//                     pointThree="Land your dream job faster"
//                 />
//                 <FeaturesCard
//                     title="Interview Prep"
//                     pointOne="Get 10 interview questions tailored to your resume"
//                     pointTwo="Practice makes perfect - helping you study faster"
//                     pointThree="Ace your next interview"
//                 />
//                 <FeaturesCard
//                     title="Be Prepared"
//                     pointOne="Experience an increased confidence knowing you studied the correct material"
//                     pointTwo="Submit your resume today and see the benefits"

//                 />

//             </div>
//         </section>
//     )
// }

// export default FeaturesPage