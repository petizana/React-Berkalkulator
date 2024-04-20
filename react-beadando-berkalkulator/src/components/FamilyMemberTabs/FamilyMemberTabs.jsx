import { v4 as uuidv4 } from 'uuid';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function FamilyMemberTabs({ members, updateSelectedMember, addNewMember }) {
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          {/* Gombok a családtagokhoz */}
          {members.map((member) => (
            <Tab color="white" key={member.key}
              onClick={() => updateSelectedMember(member)}>{member.name}</Tab>
          ))}
        
      {/* Új családtag hozzáadása gomb */}
      <Tab onClick={addNewMember}>+</Tab>
      </TabList>
      </Tabs>
    </>
  );
};


