import MarriageDiscount from "./components/MarriageDiscount/MarriageDiscount";
import FamilyDiscount from "./components/FamilyDiscount";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Discounts({ setSelectedMember, selectedMember }) {
    const [marriageDiv, setMarriageDiv] = useState("");
    const [familyDiv, setFamilyDiv] = useState("");

    useEffect(() => {
        setMarriageDiv("");
        setFamilyDiv("");
    }, [selectedMember.key])


    function under25Changed(event) {
        console.log(event.target.checked);
        setSelectedMember({ ...selectedMember, under25: event.target.checked });
    }

    function marriageChanged(event) {
        setMarriageDiv(event.target.checked ? <MarriageDiscount setSelectedMember={setSelectedMember} selectedMember={selectedMember} key={uuidv4()}></MarriageDiscount> : "");
        if (!event.target.checked) {
            setSelectedMember({ ...selectedMember, marriage: false })
            setMarriageDiv("");
        }
    }

    function personalChanged(event) {
        setSelectedMember({ ...selectedMember, personal: event.target.checked });
    }

    function familyChanged(event) {
        setFamilyDiv(event.target.checked ? <FamilyDiscount setSelectedMember={setSelectedMember} selectedMember={selectedMember} key={uuidv4()}></FamilyDiscount> : "");
        if (!event.target.checked) {
            setSelectedMember({ ...selectedMember, family: 0 })
            setFamilyDiv("");
        }
    }



    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="under25" onChange={under25Changed} checked={selectedMember.under25 ?? ""} />
                <label className="form-check-label" htmlFor="under25">25 év alattiak SZJA mentessége</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="marriage" onChange={marriageChanged} checked={selectedMember.marriage ?? ""} />
                <label className="form-check-label" htmlFor="marriage">Friss házasok kedvezménye</label> &nbsp;
                {marriageDiv}
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="personal" onChange={personalChanged} checked={selectedMember.personal ?? ""} />
                <label className="form-check-label" htmlFor="personal">Személyi adókedvezmény</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="personal" onChange={familyChanged} checked={selectedMember.family !== 0 ? true : ""} />
                <label className="form-check-label" htmlFor="personal">Családi kedvezmény</label> &nbsp;
                {familyDiv}
            </div>
        </>
    );
}