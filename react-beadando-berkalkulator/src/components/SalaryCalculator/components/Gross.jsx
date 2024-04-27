import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
export default function Gross({ label, selectedMember, updateSelectedMember }) {


    function grossChanged(event) {
        updateSelectedMember({ ...selectedMember, gross: event });
    }

    return (
        <div className="form-group">
            <label htmlFor="grossInput">{label}</label>
            <NumberInput id="grossInput"  name="grossInput" aria-describedby="input_help" placeholder={label} step={1000} onChange={grossChanged} value={selectedMember.gross ?? ""} min={0} max={10000000}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <small id="helpgrossInput" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}