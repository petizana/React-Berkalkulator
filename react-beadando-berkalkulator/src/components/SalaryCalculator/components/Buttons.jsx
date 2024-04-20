export default function Buttons({updateSelectedMember, selectedMember})
{
    function changeByPercent(amount)
    {
        updateSelectedMember({...selectedMember,gross: Number(selectedMember.gross) + Number(selectedMember.gross*amount/100)});
    }
    return(
        <>
        <button type="button" className="btn btn-secondary" onClick={()=> changeByPercent(-1)}>-1%</button> &nbsp;
        <button type="button" className="btn btn-secondary" onClick={()=> changeByPercent(-5)}>-5%</button> &nbsp;
        <button type="button" className="btn btn-secondary" onClick={()=> changeByPercent(+1)}>+1%</button> &nbsp;
        <button type="button" className="btn btn-secondary" onClick={()=> changeByPercent(+5)}>+5%</button>
        </>
    );
}