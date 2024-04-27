import Gross from "./components/Gross"
import Name from "./components/Name"
import RangeInput from "./components/RangeInput";
import Buttons from "./components/Buttons";
import Discounts from "./components/Discounts/Discounts";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { v4 as uuidv4 } from 'uuid';
export default function SalaryCalculator({ selectedMember, updateSelectedMember, members, countNetSalary, deleteSelectedMember}) {
 

  

  return (
    <>
    
    <div id="calc" style={{textAlign: 'right'}}>
      
      <Button colorScheme="blue" onClick={deleteSelectedMember}><DeleteIcon /></Button>
      <div style={{textAlign: 'left'}}>
        <strong>{selectedMember.name} bérének kiszámítása</strong>
        <Name label="Családtag neve" selectedMember={selectedMember} updateSelectedMember={updateSelectedMember} members={members}></Name>
        <Gross label="Bruttó bér" selectedMember={selectedMember} updateSelectedMember={updateSelectedMember} members={members}></Gross>
        <RangeInput updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></RangeInput> <br /> <br />
        <Buttons updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></Buttons> <br />
        <br /><strong>Kedvezmények</strong> <br />
        <Discounts updateSelectedMember={updateSelectedMember} selectedMember={selectedMember}></Discounts>
        <br /> Számított nettó bér:
        <br /><Button colorScheme="blue">{countNetSalary(selectedMember)}</Button>
      </div>
    </div>
    </>
    
  );
};
