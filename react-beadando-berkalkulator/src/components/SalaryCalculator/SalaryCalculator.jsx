import LabeledInputForName from "./components/LabeledInputForName";
import LabeledInputForNet from "./components/LabeledInputForNet";
import RangeInput from "./components/RangeInput";
import Buttons from "./components/Buttons";
import Discounts from "./components/Discounts/Discounts";
import { v4 as uuidv4 } from 'uuid';
export default function SalaryCalculator({ selectedMember, setSelectedMember, members, setMembers, countNetSalary }) {
 

  function deleteSelectedMember() {
    if(members.length===1) setMembers([{ name: '', gross: 0,key: uuidv4() ,under25: false, marriage: false, personal: false, family: 0 }]);
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

    <br /><button type="button" className="btn btn-secondary">{countNetSalary(selectedMember)}</button>
  </div>;
};
