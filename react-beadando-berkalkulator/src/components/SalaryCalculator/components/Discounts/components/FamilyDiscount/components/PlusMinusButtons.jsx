import { Button } from '@chakra-ui/react'

export default function PlusMinusButtons({ value, onClickForMinus, onClickForPlus }) {
    return (
        <>
            <Button size="xs" variant="outline" colorScheme="blue" onClick={onClickForMinus}>
                -
            </Button>
            {value}
            <Button size="xs" variant="outline" colorScheme="blue" onClick={onClickForPlus}>
                +
            </Button>
        </>)
}