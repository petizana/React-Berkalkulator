export default function RangeInput({ setSelectedMember, selectedMember }) {
    function changeGross(event) {
        setSelectedMember({ ...selectedMember, gross: event.target.value })
    }

    return (
        <>
            <input type="range" className="form-range w-50" id="customRange" min="0" max="10000000" step="10000" value={selectedMember.gross ?? 0} onChange={changeGross}></input>
        </>
    );
}