import { Input } from '@chakra-ui/react'
export default function LabeledInput({ label, selectedMember, updateSelectedMember}) {

   

    function grossChanged(event) {
        updateSelectedMember({...selectedMember,gross: event.target.value});

    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <Input id="input" aria-describedby="input_help" placeholder={label} onChange={grossChanged} value={selectedMember.gross ?? ""} />
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}