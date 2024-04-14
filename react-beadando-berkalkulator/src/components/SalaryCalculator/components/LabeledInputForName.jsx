
export default function LabeledInputForName({ label, type, selectedMember, setSelectedMember, members, setMembers }) {

   

    function nameChanged(event) {
        setSelectedMember({...selectedMember,name: event.target.value});

    }

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <input type={type} className="form-control w-50" id="input" aria-describedby="input_help" placeholder={label} onChange={nameChanged} value={selectedMember.name ?? ""} />
            <small id="input_help" className="form-text text-muted">Add meg a {label}t! </small>
        </div>

    );
}