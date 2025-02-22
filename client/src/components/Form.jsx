function Form({ inputFields }) {
    return (
        <form>
            {inputFields.map((input, index) => (
                <div className="input-div" key={index}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        type={input.type}
                        name={input.name}
                        id={input.name}
                        aria-label={input.label}
                        placeholder={input.placeholder}
                        className="form-input"
                    />
                </div>
            ))}
            <input type="submit" />
        </form>
    )
}

export default Form