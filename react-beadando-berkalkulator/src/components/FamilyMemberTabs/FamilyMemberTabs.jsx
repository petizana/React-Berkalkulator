import { v4 as uuidv4 } from 'uuid';
export default function FamilyMemberTabs({ members, setMembers, setSelectedMember }) {
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };


  // Családtag hozzáadása
  const addNewMember = () => {
    const newMember = { name: '', gross: 0, key: uuidv4(), netSalary: 0 , under25: false, marriage: false, personal: false, family: 0};
    setMembers([...members, newMember]);
    setSelectedMember(newMember);
  };


  return (
    <>
        {/* Gombok a családtagokhoz */}
      {members.map((member) => (
        <button type="button" className="btn btn-secondary"
          key={member.key}
          onClick={() => handleMemberClick(member)}
        >
          {member.name}
        </button>
      ))}

      {/* Új családtag hozzáadása gomb */}
      <button onClick={addNewMember} type="button" className="btn btn-secondary">Új családtag hozzáadása</button>
    </>
  );
};


