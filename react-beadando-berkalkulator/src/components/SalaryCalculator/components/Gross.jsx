import { Input } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
export default function LabeledInput({ label, selectedMember, updateSelectedMember }) {



    function grossChanged(event) {
        updateSelectedMember({ ...selectedMember, gross: event });

    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <NumberInput id="input" aria-describedby="input_help" placeholder={label} onChange={grossChanged} value={selectedMember.gross ?? ""} min={0} max={10000000}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}