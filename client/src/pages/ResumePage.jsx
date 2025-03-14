import { Link } from "react-router-dom"
import Form from "../components/Form"
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
function ResumePage() {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/login")
        }
    }, [isLoggedIn, navigate])


    const [formState, setFormState] = useState({
        experience: "",
        jobTitle: "",
    })
    const [fileState, setFileState] = useState(null)

    const [pageLayout, setPageLayout] = useState("form")

    const [results, setResults] = useState("")

    const fields = [
        { name: 'experience', type: 'text', label: 'Experience', placeholder: 'New Grad, Entry Level, Senior' },
        { name: 'jobTitle', type: 'text', label: 'Job Title', placeholder: "Software Engineer" },
        { name: 'upload', type: 'file', label: "Upload Resume (Word doc)" }
    ]

    const handleChange = (e) => {
        setFormState({
            ...formState,
            experience: e.target.value,
            jobTitle: e.target.value
        })
    }

    const handleFileChange = (e) => {
        setFileState(e.target.files[0])
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('experience', formState.experience)
        formData.append('jobTitle', formState.jobTitle)
        formData.append('file', fileState)

        setPageLayout('loading')

        try {
            const response = await fetch('/api/user/submitResume', {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error('Error submitting resume')
            }


            const data = await response.json()

            setPageLayout('results')
            // console.log(data.content)
            setResults(data.content)
        } catch (error) {

        }
    }

    const handleClick = () => {
        setPageLayout("form")
    }


    return (
        <section className="main-section">
            {pageLayout === 'form' ? <Form inputFields={fields} change={handleChange} fileChange={handleFileChange} formSubmit={handleFormSubmit} /> : pageLayout === 'loading' ? <p>Loading...</p> :
                <span className="results-container">
                    <h1>Results</h1>
                    <p>{results}</p>
                    <Link onClick={handleClick} className="resume-refresh-btn">Add Another Resume</Link>
                </span>}
        </section>
    )
}

export default ResumePage

