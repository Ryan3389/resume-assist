import Form from "../components/Form"
function ResumePage() {
    const fields = [
        { name: 'experience', type: 'text', label: 'Experience', placeholder: 'New Grad, Entry Level, Senior' },
        { name: 'jobTitle', type: 'text', label: 'Job Title', placeholder: "Software Engineer" },
        { name: 'upload', type: 'file', label: "Upload Resume" }
    ]
    return (
        <section className="main-section">
            <Form
                inputFields={fields}
            />
        </section>
    )
}

export default ResumePage