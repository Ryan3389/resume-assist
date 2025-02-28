import Form from "../components/Form"
import { useState } from "react"

function SignupPage() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState(null)

    const fields = [
        { name: "firstName", id: 'firstName', placeholder: "John", label: "First Name", type: 'text' },
        { name: "lastName", id: 'lastName', placeholder: "Doe", label: "Last Name", type: 'text' },
        { name: "email", id: 'email', placeholder: "John.Doe@example.com", label: "Email", type: 'email' },
        { name: "password", id: 'password', placeholder: "******", label: "Password", type: 'password' },
    ]


    const handleChange = (e) => {
        const { name, value } = e.target

        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/user/createUser', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState)
            })

            const data = await response.json()

            if (!response.ok) {
                setErrorMessage(data)
                console.log('state test: ' + errorMessage)
            }

            window.location.assign('/resume')
        } catch (error) {

        }
    }

    return (
        <section className="main-section">
            <Form
                inputFields={fields}
                change={handleChange}
                formSubmit={handleFormSubmit}
                errorMsg={errorMessage}
                redirectMsg="Already Have an Account ? Login"
                redirectPath={'/login'}
            />
        </section>
    )
}

export default SignupPage