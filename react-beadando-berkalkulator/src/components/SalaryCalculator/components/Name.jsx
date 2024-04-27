import { Input } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';

export default function Name({ label, selectedMember, updateSelectedMember}) {

   

    function nameChanged(event) {
        updateSelectedMember({...selectedMember,name: event.target.value});

    }

    return (
        <div className="form-group">
            <label htmlFor="nameInput">{label}</label>
            <Input id="nameInput" aria-describedby="input_help" placeholder={label} onChange={nameChanged} value={selectedMember.name ?? ""} />
            <small id="helpNameInput" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}