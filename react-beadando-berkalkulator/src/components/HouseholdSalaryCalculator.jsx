import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useState } from "react";



export default function HouseholdSalaryCalculator() {

  const [members, setMembers] = useState([{ name: '', gross: 0, key: uuidv4(), netSalary: 0, under25: false, marriage: false, personal: false, family: 0 }]);
  const [selectedMember, setSelectedMember] = useState(members[0]);


  useEffect(() => {
    setMembers([...members.map((member) => {
      if (member.key === selectedMember.key) {
        return selectedMember;
      }
      return member;
    })]);
  }, [selectedMember])

  useEffect(() => {
    if (!members.some(x => x.key === selectedMember.key)) {
      setSelectedMember(members[0]);
    }
  }, [members])

  return (
    <>
      <header>
        <FamilyMemberTabs members={members} setMembers={setMembers} setSelectedMember={setSelectedMember} />
      </header>
      <main>
        <SalaryCalculator selectedMember={selectedMember} setSelectedMember={setSelectedMember} members={members} setMembers={setMembers} />
        <HouseholdSummary members={members} />
      </main>
    </>
  );
};

