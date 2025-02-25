import Form from "../components/Form"
import { useState } from "react"
function LoginPage() {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState(null)

    const fields = [
        { name: 'email', id: 'email', placeholder: "john.doe@example.com", label: 'Email', type: 'email' },
        { name: 'password', id: 'password', placeholder: '******', label: 'Password', type: 'password' }
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
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState)
            })

            const data = await response.json()
            const isAuth = data.auth

            if (!response.ok) {
                console.error("Error Message: " + data.errorMessage)
                setErrorMessage(data.errorMessage)
                return
            }

            if (!isAuth) {
                window.location.assign("/")
            }
            window.location.assign('/resume')

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="main-section">
            <Form
                inputFields={fields}
                change={handleChange}
                formSubmit={handleFormSubmit}
                errorMsg={errorMessage}
            />
        </section>
    )
}

export default LoginPage