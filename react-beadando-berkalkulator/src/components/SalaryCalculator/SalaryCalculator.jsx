import LabeledInputForName from "./components/LabeledInputForName";
import LabeledInputForNet from "./components/LabeledInputForNet";
import RangeInput from "./components/RangeInput";
import Buttons from "./components/Buttons";
import Discounts from "./components/Discounts/Discounts";
import { v4 as uuidv4 } from 'uuid';
export default function SalaryCalculator({ selectedMember, setSelectedMember, members, setMembers }) {
  let net;
  const SZJA = selectedMember.gross * 0.15;
  const TB = selectedMember.gross * 0.185;
  if (!selectedMember.under25) net = selectedMember.gross - SZJA - TB; // simán ha nincs 25 év alatti kedvezmény
  else {
    if (selectedMember.gross <= 499952) {
      net = selectedMember.gross - TB; // ha van kedvezmény és az a limit alatti
    }
    else {
      net = (selectedMember.gross - TB) - (selectedMember.gross - 499952 * 0.15); // ha van kedvezmény és limit feletti
    }
  }
  if (selectedMember.marriage) net += 5000;
  if (selectedMember.personal && SZJA + TB <= 77300) net += SZJA + TB;
  if (selectedMember.personal && SZJA + TB > 77300) net += 77300;
  net += selectedMember.family;


  function deleteSelectedMember() {
    if(members.length===1) setMembers([{ name: '', gross: 0,key: uuidv4(), netSalary: 0 ,under25: false, marriage: false, personal: false, family: 0 }]);
    else setMembers(members.filter(x => x !== selectedMember));
  }

  return <div>
    <button type="button" className="btn btn-primary" onClick={deleteSelectedMember}>🗑️</button>
    <LabeledInputForName label="Családtag neve" type="text" selectedMember={selectedMember} setSelectedMember={setSelectedMember} members={members} setMembers={setMembers}></LabeledInputForName>
    <LabeledInputForNet label="Bruttó bér" type="number" selectedMember={selectedMember} setSelectedMember={setSelectedMember} members={members} setMembers={setMembers}></LabeledInputForNet>
    <RangeInput setSelectedMember={setSelectedMember} selectedMember={selectedMember}></RangeInput> <br />
    <Buttons setSelectedMember={setSelectedMember} selectedMember={selectedMember}></Buttons> <br />
    Kedvezmények <br />
    <Discounts setSelectedMember={setSelectedMember} selectedMember={selectedMember}></Discounts>
    <br /> Számított nettó bér:

    <br /><button type="button" className="btn btn-secondary">{net}</button>
  </div>;
};
