export default function HouseholdSummary({ members }) {

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
          {...members.map((member) => <tr><td>{member.name}</td><td>{member.net} Ft</td></tr>)}
        </tbody>
      </table>

    </>

  )
}