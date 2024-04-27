import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useState } from "react";



export default function HouseholdSalaryCalculator() {


  function useMembers(initVal) {
    const [members, setMembers] = useState([{ name: '', gross: 0, key: uuidv4(), under25: false, marriage: false, personal: false, family: 0 , beneficiary: 0, dependent: 0}]);
    const [selectedMember, setSelectedMember] = useState(members[0]);

    function updateSelectedMember(selectedMember) {
      setSelectedMember(selectedMember);
      setMembers(prevMembers => {
        const updatedMembers = prevMembers.map((member) => {
          if (member.key === selectedMember.key) {
            return selectedMember;
          }
          return member;
        });

        localStorage.setItem("members", JSON.stringify(updatedMembers));

        return updatedMembers;
      });
    }


    function addNewMember() {
      const newMember = { name: '', gross: 0, key: uuidv4(), under25: false, marriage: false, personal: false, family: 0, beneficiary: 0, dependent: 0 };
      localStorage.setItem("members", JSON.stringify([...members, newMember]));
      setMembers([...members, newMember]);
      setSelectedMember(newMember);
    }

    function deleteSelectedMember() {
      if(members.length===1) setMembers([{ name: '', gross: 0,key: uuidv4() ,under25: false, marriage: false, personal: false, family: 0 , beneficiary: 0, dependent: 0 }]);
      else setMembers(members.filter(x => x.key !== selectedMember.key));
    }



    return { members, selectedMember, updateSelectedMember, addNewMember, deleteSelectedMember, setMembers }
  }

  const { members, selectedMember, updateSelectedMember, addNewMember, deleteSelectedMember, setMembers } = useMembers("");

  useEffect(() => {
    if (localStorage.members) {
      updateSelectedMember(JSON.parse(localStorage.members)[0]);
      setMembers(JSON.parse(localStorage.members));
    }
  }, []);

  useEffect(() => {
    if (!members.some(x => x.key === selectedMember.key)) {
      updateSelectedMember(members[0]);
    }
  }, [members])


  function countNetSalary(member) {
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
    if(net>member.gross) return Number(member.gross);
    return net;
  }

  return (
    <div>
      <header>
        <FamilyMemberTabs members={members} updateSelectedMember={updateSelectedMember} addNewMember={addNewMember} />
      </header>
      <main>
        <SalaryCalculator selectedMember={selectedMember} updateSelectedMember={updateSelectedMember} members={members} countNetSalary={countNetSalary} deleteSelectedMember={deleteSelectedMember} />
        <HouseholdSummary members={members} countNetSalary={countNetSalary} />
      </main>
    </div>
  );
};

