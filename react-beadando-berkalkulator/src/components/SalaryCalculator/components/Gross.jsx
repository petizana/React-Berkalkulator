import { Input } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
export default function Gross({ label, selectedMember, updateSelectedMember}) {

   

    function grossChanged(event) {
        updateSelectedMember({...selectedMember,gross: event.target.value});

    }

    return (
        <div className="form-group">
            <label htmlFor="grossInput">{label}</label>
            <Input id="grossInput" aria-describedby="input_help" placeholder={label} onChange={grossChanged} value={selectedMember.gross ?? ""} />
            <small id="helpgrossInput" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}