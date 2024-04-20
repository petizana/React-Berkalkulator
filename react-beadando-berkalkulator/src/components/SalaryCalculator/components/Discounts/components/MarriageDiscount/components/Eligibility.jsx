import { Button, ButtonGroup } from '@chakra-ui/react'
export default function Eligibility({eligible})
{
    return(
        <>
        <Button type="button" colorScheme={eligible ?"green" : "red"  }>{eligible ? "Jogosult" : "Nem jogosult"}</Button>
        </>
    )
}