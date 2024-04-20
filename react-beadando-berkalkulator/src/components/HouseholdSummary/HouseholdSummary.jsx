export default function HouseholdSummary({ members, countNetSalary }) {

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
        </tbody>
      </table>

    </>

  )
}