import MarriageDiscount from "./components/MarriageDiscount/MarriageDiscount";
import FamilyDiscount from "./components/FamilyDiscount/FamilyDiscount";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Switch } from '@chakra-ui/react'
export default function Discounts({ updateSelectedMember, selectedMember }) {
    const [marriageChecked, setMarriageChecked] = useState(false);
    const [familyChecked, setFamilyChecked] = useState(false);

    useEffect(() => {
        setMarriageChecked(selectedMember.marriage);
        setFamilyChecked(selectedMember.family > 0);
    }, [selectedMember.key])


    function under25Changed(event) {
        updateSelectedMember({ ...selectedMember, under25: event.target.checked });
    }

    function marriageChanged(event) {
        setMarriageChecked(event.target.checked);
        if (!event.target.checked) {
            updateSelectedMember({ ...selectedMember, marriage: false })
        }
    }

    function personalChanged(event) {
        updateSelectedMember({ ...selectedMember, personal: event.target.checked });
    }

    function familyChanged(event) {
        setFamilyChecked(event.target.checked);
        if (!event.target.checked) {
            updateSelectedMember({ ...selectedMember, family: 0, dependent: 0, beneficiary: 0 })
        }
    }



    return (
        <>

            <Switch size="lg" id="under25" onChange={under25Changed} isChecked={selectedMember.under25 ?? ""} /> &nbsp;
            <label htmlFor="under25">25 év alattiak SZJA mentessége</label>
            <br />
            <div style={{display: "flex"}}>
                <Switch size="lg" id="marriage" onChange={marriageChanged} isChecked={selectedMember.marriage ?? ""} /> &nbsp;
                <label htmlFor="marriage">Friss házasok kedvezménye</label> &nbsp;
                <MarriageDiscount key={"mariage-discount" + selectedMember.key} style={marriageChecked ? {} : { display: 'none' }} updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></MarriageDiscount>
            </div>

            <br />
            <Switch size="lg" id="personal" onChange={personalChanged} isChecked={selectedMember.personal ?? ""} /> &nbsp;
            <label htmlFor="personal">Személyi adókedvezmény</label>
            <br />
            <div style={{display: "flex"}}>
            <Switch size="lg" id="family" onChange={familyChanged} isChecked={selectedMember.family !== 0 ? true : ""} /> &nbsp;
            <label htmlFor="family">Családi kedvezmény</label> &nbsp;
            <FamilyDiscount key={"familiy-discount" + selectedMember.key} style={familyChecked ? {} : { display: 'none' }} updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></FamilyDiscount>
            </div>
            

        </>
    );
}