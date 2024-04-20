import LabeledInputForName from "./components/LabeledInputForName";
import LabeledInputForNet from "./components/LabeledInputForNet";
import RangeInput from "./components/RangeInput";
import Buttons from "./components/Buttons";
import Discounts from "./components/Discounts/Discounts";
import { v4 as uuidv4 } from 'uuid';
export default function SalaryCalculator({ selectedMember, updateSelectedMember, members, countNetSalary, deleteSelectedMember}) {
 

  

  return <div>
    <button type="button" className="btn btn-primary" onClick={deleteSelectedMember}>🗑️</button>
    <LabeledInputForName label="Családtag neve" type="text" selectedMember={selectedMember} updateSelectedMember={updateSelectedMember} members={members}></LabeledInputForName>
    <LabeledInputForNet label="Bruttó bér" type="number" selectedMember={selectedMember} updateSelectedMember={updateSelectedMember} members={members}></LabeledInputForNet>
    <RangeInput updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></RangeInput> <br />
    <Buttons updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></Buttons> <br />
    Kedvezmények <br />
    <Discounts updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></Discounts>
    <br /> Számított nettó bér:

    <br /><button type="button" className="btn btn-secondary">{countNetSalary(selectedMember)}</button>
  </div>;
};
