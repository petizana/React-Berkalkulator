import { useState } from "react";

export default function MarriageDiscount({setSelectedMember, selectedMember}) {
    const [dateInput, setDateInput] = useState("");
    const [eligible, setEligible] = useState("");
    // mai dátum kivarázslása
    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    // Nullával kiegészített hónap és nap
    currentDay = currentDay < 10 ? `0${currentDay}` : currentDay;
    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
    const fullDate = `${currentYear}-${currentMonth}-${currentDay}`;
    function add() {
        setDateInput(<><label htmlFor="start">Add meg a házasságkötés dátumát</label>
            <input type="date" id="marriage" name="marriage" onChange={checkEligibility} max={fullDate} /></>);
    }

    function checkEligibility(event) {
        const [marriageYear, marriageMonth, marriageDay] = event.target.value.split("-");
        if ((currentYear - marriageYear === 0 && currentMonth - marriageMonth !== 0) ||
            (currentYear - marriageYear === 1) ||
            (currentYear - marriageYear === 2 && currentMonth - marriageMonth <= 0 && currentDay - marriageDay <= 0)
        ) {
            setEligible(<><button type="button" className="btn btn-success">Jogosult</button></>);
            setSelectedMember({ ...selectedMember, marriage: true });
        }
        else 
        {
            setEligible(<><button type="button" className="btn btn-danger">Nem jogosult</button></>);
            setSelectedMember({ ...selectedMember, marriage: false });
        }


    }
    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={add}>Dátum hozzáadása</button>
            {dateInput}
            {eligible}

        </>
    );
}