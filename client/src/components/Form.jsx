function Form({ inputFields, change, fileChange, formSubmit }) {
    return (
        <form onSubmit={formSubmit}>
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
            <input type="submit" />
        </form>
    )
}

export default Form
