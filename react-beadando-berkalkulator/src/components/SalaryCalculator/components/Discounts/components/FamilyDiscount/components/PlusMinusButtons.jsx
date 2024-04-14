export default function PlusMinusButtons({ value,onClickForMinus, onClickForPlus }) {
    return (
        <>
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={onClickForMinus}>
                -
            </button>
            {value}
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={onClickForPlus}>
                +
            </button>
        </>)
}