import { Button } from '@chakra-ui/react'
export default function Eligibility({ eligible }) {
    return (
        <>
            <Button colorScheme={eligible ? "green" : "red"}>{eligible ? "Jogosult" : "Nem jogosult"}</Button>
        </>
    )
}