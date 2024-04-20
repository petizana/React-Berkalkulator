import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function HouseholdSummary({ members, countNetSalary }) {
  let summary = 0;
  members.map((member) => { summary += countNetSalary(member); });
  return (
    <>
      <TableContainer>
        <Table variant='simple' maxWidth="60%">
          <TableCaption>A háztartás nettó jövedelme</TableCaption>
          <Thead>
            <Tr>
              <Th>Családtag</Th>
              <Th>Nettóbér</Th>
            </Tr>
          </Thead>
          <Tbody>
            {...members.map((member) => <Tr><Td>{member.name}</Td><Td>{countNetSalary(member)} Ft</Td></Tr>)}
            <Tr><Td>Összesen</Td><Td>{summary} Ft</Td></Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Családtag</Th>
              <Th>Nettóbér</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>

  )
}