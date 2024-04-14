import { useState, useEffect } from "react";

export default function FamilyDiscount({ setSelectedMember, selectedMember }) {
    const [dependent, setDependent] = useState(0);
    const [beneficiary, setBeneficiary] = useState(0);

    useEffect(() => {
        if (beneficiary > dependent) setBeneficiary(dependent);
    }, [dependent])

    useEffect(() => {
        let famDiscount = 0;
        switch (beneficiary) {
            case 0:
                famDiscount = 0;
                break;
            case 1:
                famDiscount = 10000 * dependent;
                break;
            case 2:
                famDiscount = 20000 * dependent;
                break;
            case 3:
                famDiscount = 33000 * dependent;
                break;
            default:
                famDiscount = 33000 * dependent;
                break;
        }
        setSelectedMember({ ...selectedMember, family: famDiscount });
    }, [dependent, beneficiary])

    return (
        <>
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={() => { if (dependent - 1 >= 0) setDependent(dependent - 1) }}>
                -
            </button>
            {dependent}
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={() => setDependent(dependent + 1)}>
                +
            </button>
            <strong>Eltartott, ebből kedvezményezett</strong>
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={() => { if (beneficiary - 1 >= 0) setBeneficiary(beneficiary - 1) }}>
                -</button>
            {beneficiary}
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={() => { if (beneficiary + 1 <= 3 && beneficiary + 1 <= dependent) setBeneficiary(beneficiary + 1) }}>
                +
            </button>
        </>
    );
}