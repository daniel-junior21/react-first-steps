import './input.css'

const InputField = ({ type = 'text', label, value, placeHolder, required = false, updatedValue}) => {
    const getInputValue = (event) => {
        updatedValue(event.target.value);
    }

    return (
        <div className={`input-field input-field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={getInputValue}
                placeholder={placeHolder} 
                required={required} 
            />
        </div>
    )
}

export default InputField