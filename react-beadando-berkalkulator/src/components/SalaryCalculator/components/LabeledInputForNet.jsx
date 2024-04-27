import { Input } from '@chakra-ui/react'
export default function LabeledInputForNet({ label,type,selectedMember, updateSelectedMember }) {

    function netChanged(event) {
        updateSelectedMember({...selectedMember, gross: event.target.value});
    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <Input type={type} id="input" aria-describedby="input_help" placeholder={label} onChange={netChanged} value={selectedMember.gross ?? ""} />
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}