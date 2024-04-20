export default function Eligibility({eligible})
{
    return(
        <>
        <button type="button" className={eligible ?"btn btn-success" : "btn btn-danger"  }>{eligible ? "Jogosult" : "Nem jogosult"}</button>
        </>
    )
}