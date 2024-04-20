import MarriageDiscount from "./components/MarriageDiscount/MarriageDiscount";
import FamilyDiscount from "./components/FamilyDiscount/FamilyDiscount";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Switch } from '@chakra-ui/react'
export default function Discounts({ updateSelectedMember, selectedMember }) {
    const [marriageDiv, setMarriageDiv] = useState("");
    const [familyDiv, setFamilyDiv] = useState("");

    useEffect(() => {
        setMarriageDiv("");
        setFamilyDiv("");
    }, [selectedMember.key])


    function under25Changed(event) {
        console.log(event.target.checked);
        updateSelectedMember({ ...selectedMember, under25: event.target.checked });
    }

    function marriageChanged(event) {
        setMarriageDiv(event.target.checked ? <MarriageDiscount updateSelectedMember={updateSelectedMember} selectedMember={selectedMember} key={uuidv4()}></MarriageDiscount> : "");
        if (!event.target.checked) {
            updateSelectedMember({ ...selectedMember, marriage: false })
            setMarriageDiv("");
        }
    }

    function personalChanged(event) {
        updateSelectedMember({ ...selectedMember, personal: event.target.checked });
    }

    function familyChanged(event) {
        setFamilyDiv(event.target.checked ? <FamilyDiscount updateSelectedMember={updateSelectedMember} selectedMember={selectedMember} key={uuidv4()}></FamilyDiscount> : "");
        if (!event.target.checked) {
            updateSelectedMember({ ...selectedMember, family: 0 })
            setFamilyDiv("");
        }
    }



    return (
        <>
            
                <Switch size="lg" id="under25" onChange={under25Changed} isChecked={selectedMember.under25 ?? ""} /> &nbsp;
                <label className="form-check-label" htmlFor="under25">25 év alattiak SZJA mentessége</label>
            <br />
                <Switch size="lg" id="marriage" onChange={marriageChanged} isChecked={selectedMember.marriage ?? ""} /> &nbsp;
                <label className="form-check-label" htmlFor="marriage">Friss házasok kedvezménye</label> &nbsp;
                {marriageDiv}
            <br />
                <Switch size="lg" id="personal" onChange={personalChanged} isChecked={selectedMember.personal ?? ""} /> &nbsp;
                <label className="form-check-label" htmlFor="personal">Személyi adókedvezmény</label>
            <br />
                <Switch size="lg" id="personal" onChange={familyChanged} isChecked={selectedMember.family !== 0 ? true : ""} /> &nbsp;
                <label className="form-check-label" htmlFor="personal">Családi kedvezmény</label> &nbsp;
                {familyDiv}
            
        </>
    );
}