export default function LabeledInputForNet({ label,type,selectedMember, setSelectedMember }) {

    function netChanged(event) {
        setSelectedMember({...selectedMember, gross: event.target.value});
    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <input type={type} className="form-control w-50" id="input" aria-describedby="input_help" placeholder={label} onChange={netChanged} value={selectedMember.gross ?? ""} />
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}