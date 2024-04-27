import { Tabs, TabList, Tab } from '@chakra-ui/react'
export default function FamilyMemberTabs({ members, updateSelectedMember, addNewMember }) {
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          {members.map((member) => (
            <Tab color="white" key={member.key}
              onClick={() => updateSelectedMember(member)}>{member.name}</Tab>
          ))}

          <Tab onClick={addNewMember}>+</Tab>
        </TabList>
      </Tabs>
    </>
  );
};


