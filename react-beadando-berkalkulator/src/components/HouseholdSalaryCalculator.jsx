import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useState } from "react";



export default function HouseholdSalaryCalculator() {

  const [members, setMembers] = useState([{ name: '', gross: 0, key: uuidv4(), under25: false, marriage: false, personal: false, family: 0 }]);
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

  function countNetSalary(member)
  {
    let net;
    const SZJA = member.gross * 0.15;
    const TB = member.gross * 0.185;
    if (!member.under25) net = member.gross - SZJA - TB; // simán ha nincs 25 év alatti kedvezmény
    else {
      if (member.gross <= 499952) {
        net = member.gross - TB; // ha van kedvezmény és az a limit alatti
      }
      else {
        net = (member.gross - TB) - ((member.gross - 499952) * 0.15); // ha van kedvezmény és limit feletti
      }
    }
    if (member.marriage) net += 5000;
    if (member.personal && SZJA + TB <= 77300) net += SZJA + TB;
    if (member.personal && SZJA + TB > 77300) net += 77300;
    net += member.family;

    return net;
  }

  return (
    <>
      <header>
        <FamilyMemberTabs members={members} setMembers={setMembers} setSelectedMember={setSelectedMember} />
      </header>
      <main>
        <SalaryCalculator selectedMember={selectedMember} setSelectedMember={setSelectedMember} members={members} setMembers={setMembers} countNetSalary={countNetSalary} />
        <HouseholdSummary members={members} countNetSalary={countNetSalary} />
      </main>
    </>
  );
};

