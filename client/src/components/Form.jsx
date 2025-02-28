import { Link } from 'react-router-dom'
function Form({ inputFields, change, fileChange, formSubmit, errorMsg, redirectMsg, redirectPath }) {
    return (
        <form onSubmit={formSubmit}>
            {errorMsg && <p className="error-text">{errorMsg}</p>}
            {/* <p className="error-text">{errorMsg && errorMsg}</p> */}
            {inputFields.map((input, index) => (
                <div className="input-div" key={index}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        type={input.type}
                        name={input.name}
                        id={input.name}
                        aria-label={input.label}
                        placeholder={input.placeholder}
                        onChange={input.type === 'file' ? fileChange : change}
                        className="form-input"
                        required
                    />
                </div>
            ))}
            <Link className='redirectMsg' to={redirectPath}>{redirectMsg}</Link>
            <input type="submit" />
        </form>
    )
}

export default Form
