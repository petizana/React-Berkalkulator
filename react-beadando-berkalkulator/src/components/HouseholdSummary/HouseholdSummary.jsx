export default function HouseholdSummary({ members, countNetSalary }) {
let summary=0;
members.map((member)=> {summary+=countNetSalary(member);});
  return (
    <>

      <table>
        <thead>
          <tr>
            <th>Családtag</th>
            <th>Nettóbér</th>
          </tr>
        </thead>

        <tbody>
          {...members.map((member) => <tr><td>{member.name}</td><td>{countNetSalary(member)} Ft</td></tr>)}
          <tr><td>Összesen</td><td>{summary} Ft</td></tr>
        </tbody>
      </table>

    </>

  )
}