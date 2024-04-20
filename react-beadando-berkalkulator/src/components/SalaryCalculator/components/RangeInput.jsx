import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
export default function RangeInput({ updateSelectedMember, selectedMember }) {
    function changeGross(event) {
        updateSelectedMember({ ...selectedMember, gross: event})
    }

    return (
        <>
            <Slider min={0} max={10000000} step={1000} value={selectedMember.gross ?? 0} onChange={changeGross}>
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </>
    );
}