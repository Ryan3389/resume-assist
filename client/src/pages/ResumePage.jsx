
import Form from "../components/Form"
import { useState } from "react"
function ResumePage() {
    const [formState, setFormState] = useState({
        experience: "",
        jobTitle: "",
    })
    const [fileState, setFileState] = useState(null)

    const [pageLayout, setPageLayout] = useState("form")

    const fields = [
        { name: 'experience', type: 'text', label: 'Experience', placeholder: 'New Grad, Entry Level, Senior' },
        { name: 'jobTitle', type: 'text', label: 'Job Title', placeholder: "Software Engineer" },
        { name: 'upload', type: 'file', label: "Upload Resume" }
    ]

    const handleChange = (e) => {
        setFormState({
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

        try {
            const response = await fetch('/api/user/submitResume', {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error('Error submitting resume')
            }

            const data = await response.json()
            console.log(data.content)
        } catch (error) {

        }
    }

    return (
        <section className="main-section">

            <Form
                inputFields={fields}
                change={handleChange}
                fileChange={handleFileChange}
                formSubmit={handleFormSubmit}
            />

        </section>
    )
}

export default ResumePage


