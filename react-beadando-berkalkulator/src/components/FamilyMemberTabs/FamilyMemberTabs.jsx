import { v4 as uuidv4 } from 'uuid';
export default function FamilyMemberTabs({ members, updateSelectedMember, addNewMember }) {
  const handleMemberClick = (member) => {
    updateSelectedMember(member);
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


