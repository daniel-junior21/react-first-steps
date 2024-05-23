import './Select.css'

const Select = (props) => {
    const getSelectValue = (event) => {
        props.updatedValue(event.target.value);
    }

    return (
        <div className='select'>
            <label>{props.label}</label>
            <select 
                value={props.value} 
                required={props.required}
                onChange={getSelectValue}>
                    <option></option>
                { props.options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default Select