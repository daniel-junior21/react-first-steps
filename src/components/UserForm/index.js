import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import './Form.css'

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const submitingForm = (event) => {
        event.preventDefault();
        props.setNewUser({
            name,
            role,
            image,
            team
        })
    }

    const teams = [
        'Back-End', 
        'Front-End', 
        'Mobile'
    ]

    return (
        <section className="presentation-form">
            <form onSubmit={submitingForm}>
                <h2>Fill the form to create a presentation card</h2>
                <TextInput 
                    label="Name" 
                    placeHolder="Insert your name" 
                    required={true} 
                    value={name}
                    updatedValue={value => setName(value)}
                />
                <TextInput 
                    label="Role" 
                    placeHolder="Insert your role" 
                    required={true}
                    value={role}
                    updatedValue={value => setRole(value)}
                />
                <TextInput 
                    label="Image" 
                    placeHolder="Insert the image path" 
                    required={false}
                    value={image}
                    updatedValue={value => setImage(value)}
                />
                <Select 
                    label="Team" 
                    options={teams} 
                    required={true}
                    value={team}
                    updatedValue={value => setTeam(value)}
                />
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default UserForm;