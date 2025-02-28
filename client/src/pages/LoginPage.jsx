import Form from "../components/Form"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
function LoginPage() {
    const { setIsLoggedIn } = useAuth()
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
        e.preventDefault();

        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });
            const data = await response.json();

            if (data.isLoggedIn) {
                setIsLoggedIn(true)
                window.location.assign("/resume")
            } else {
                setErrorMessage(data);
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="main-section">
            <Form
                inputFields={fields}
                change={handleChange}
                formSubmit={handleFormSubmit}
                errorMsg={errorMessage}
                redirectMsg="Don't Have an Account ? Create Account"
                redirectPath="/signup"
            />
        </section>
    )
}

export default LoginPage
