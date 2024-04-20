import { Input } from '@chakra-ui/react'
export default function LabeledInput({ label, selectedMember, updateSelectedMember}) {

   

    function nameChanged(event) {
        updateSelectedMember({...selectedMember,name: event.target.value});

    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <Input id="input" aria-describedby="input_help" placeholder={label} onChange={nameChanged} value={selectedMember.name ?? ""} />
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}