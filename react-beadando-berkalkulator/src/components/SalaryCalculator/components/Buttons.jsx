import { Button, ButtonGroup } from '@chakra-ui/react'
export default function Buttons({ updateSelectedMember, selectedMember }) {
    function changeByPercent(amount) {
        updateSelectedMember({ ...selectedMember, gross: Number(selectedMember.gross) + Number(selectedMember.gross * amount / 100) });
    }
    return (
        <>
            <ButtonGroup spacing='10'>
                <Button colorScheme='blue'onClick={() => changeByPercent(-1)}>-1%</Button>
                <Button colorScheme='blue'onClick={() => changeByPercent(-5)}>-5%</Button>
                <Button colorScheme='blue'onClick={() => changeByPercent(+1)}>+1%</Button>
                <Button colorScheme='blue'onClick={() => changeByPercent(+5)}>+5%</Button>
            </ButtonGroup>
        </>
    );
}