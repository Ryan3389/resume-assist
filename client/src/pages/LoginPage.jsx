import Form from "../components/Form"
import { useState } from "react"
function LoginPage() {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })

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

            if (!response.ok) {
                throw new Error("Login Error")
            }

            const data = await response.json()

            console.log(data)

            const isUserAuth = data.authenticated

            if (isUserAuth) {
                window.location.assign('/resume')
            } else {
                window.location.assign('/')
            }
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
            />
        </section>
    )
}

export default LoginPage