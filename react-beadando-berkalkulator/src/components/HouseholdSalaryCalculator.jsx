import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useState } from "react";


export default function HouseholdSalaryCalculator(){

  const initialFamilyMembers = [
    { name: 'Anna', gross: 50000,key: uuidv4(), netSalary: 0 ,under25: false, marriage: false, personal: false },
    { name: 'Béla', gross: 60000,key: uuidv4(), netSalary: 0 ,under25: false, marriage: false, personal: false },
    // További családtagok...
  ];

  const [members,setMembers] = useState(initialFamilyMembers);
  const [selectedMember,setSelectedMember] = useState({ name: '', gross: 0, key: uuidv4(), netSalary: 0  ,under25: false, marriage: false, personal: false});


  useEffect(() => {
    setMembers([...members.map((member) => {
        if (member.key === selectedMember.key) {
            return selectedMember;
        }
        return member;
    })]);
}, [selectedMember])

  return (
    <>
      <header>
        <FamilyMemberTabs members={members} setMembers={setMembers} setSelectedMember={setSelectedMember}/>
      </header>
      <main>
        <SalaryCalculator selectedMember={selectedMember} setSelectedMember={setSelectedMember} members={members} setMembers={setMembers} />
        <HouseholdSummary />
      </main>
    </>
  );
};

