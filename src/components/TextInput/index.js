import './TextInput.css'

const TextInput = (props) => {
    const getInputValue = (event) => {
        props.updatedValue(event.target.value);
    }

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input 
                value={props.value}
                onChange={getInputValue}
                placeholder={props.placeHolder} 
                required={props.required} 
            />
        </div>
    )
}

export default TextInput