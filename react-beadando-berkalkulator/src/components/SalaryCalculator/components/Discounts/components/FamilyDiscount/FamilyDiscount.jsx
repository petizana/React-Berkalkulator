import { useState, useEffect } from "react";
import PlusMinusButtons from "./components/PlusMinusButtons";

export default function FamilyDiscount({ style, updateSelectedMember, selectedMember }) {


    useEffect(() => {
        let famDiscount = 0;
        switch (selectedMember.beneficiary) {
            case 0:
                famDiscount=0;
                break;
            case 1:
                famDiscount = 10000 * selectedMember.dependent;
                break;
            case 2:
                famDiscount = 20000 * selectedMember.dependent;
                break;
            case 3:
                famDiscount = 33000 * selectedMember.dependent;
                break;
            default:
                famDiscount = 33000 * selectedMember.dependent;
                break;
        }
        updateSelectedMember({ ...selectedMember, family: famDiscount });
    }, [selectedMember.dependent, selectedMember.beneficiary])

    function minusForDependent() {
        if (selectedMember.dependent - 1 >= 0) {
            if (selectedMember.beneficiary > selectedMember.dependent-1) updateSelectedMember({...selectedMember, beneficiary: selectedMember.dependent-1, dependent: selectedMember.dependent - 1 });
            else updateSelectedMember({ ...selectedMember, dependent: selectedMember.dependent - 1 });
        }

    }

    function plusForDependent() {
        updateSelectedMember({ ...selectedMember, dependent: selectedMember.dependent + 1 });
    }

    function minusForBeneficiary() {
        if (selectedMember.beneficiary - 1 >= 0) {
            updateSelectedMember({ ...selectedMember, beneficiary: selectedMember.beneficiary - 1 })
        }
    }

    function plusForBeneficiary() {
        if (selectedMember.beneficiary + 1 <= 3 && selectedMember.beneficiary + 1 <= selectedMember.dependent) {
            updateSelectedMember({ ...selectedMember, beneficiary: selectedMember.beneficiary + 1 })
        }
    }

    return (
        <div style={style}>
            <PlusMinusButtons value={selectedMember.dependent} onClickForMinus={minusForDependent} onClickForPlus={plusForDependent}></PlusMinusButtons>
            <strong>Eltartott, ebből kedvezményezett</strong>
            <PlusMinusButtons value={selectedMember.beneficiary} onClickForMinus={minusForBeneficiary} onClickForPlus={plusForBeneficiary}></PlusMinusButtons>

        </div>
    );
}