import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import InputField from '../InputField';
import './Form.css'

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const submitUserForm = (event) => {
        event.preventDefault();
        props.setNewUser({
            id: crypto.randomUUID(),
            name,
            role,
            image,
            team
        })
        cleanUserForm();
    }

    const submitTeamForm = (event) => {
        event.preventDefault();
        props.setNewTeam({
            id: crypto.randomUUID(),
            name: teamName,
            color: teamColor,
        })
        cleanTeamForm();
    }

    function cleanUserForm() {
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    function cleanTeamForm() {
        setTeamName('');
        setTeamColor('');
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={submitUserForm}>
                <h2>Fill the form to create a presentation card</h2>
                <InputField 
                    label="Name" 
                    placeHolder="Insert your name" 
                    required={true} 
                    value={name}
                    updatedValue={value => setName(value)}
                />
                <InputField 
                    label="Role" 
                    placeHolder="Insert your role" 
                    required={true}
                    value={role}
                    updatedValue={value => setRole(value)}
                />
                <InputField 
                    label="Image" 
                    placeHolder="Insert the image path" 
                    required={false}
                    value={image}
                    updatedValue={value => setImage(value)}
                />
                <Select 
                    label="Team" 
                    options={props.teamsNames} 
                    required={true}
                    value={team}
                    updatedValue={value => setTeam(value)}
                />
                <Button>
                    Create card
                </Button>
            </form>
            <form className="form" onSubmit={submitTeamForm}>
                <h2>Fill the form to create a new Team</h2>
                <InputField 
                    label="Name" 
                    placeHolder="Insert your team name" 
                    required={true} 
                    value={teamName}
                    updatedValue={value => setTeamName(value)}
                />
                <InputField
                    type='color'
                    label="Color" 
                    placeHolder="Insert your team color" 
                    required={true}
                    value={teamColor}
                    updatedValue={value => setTeamColor(value)}
                />
                <Button>
                    Create Team
                </Button>
            </form>
        </section>
    )
}

export default UserForm;