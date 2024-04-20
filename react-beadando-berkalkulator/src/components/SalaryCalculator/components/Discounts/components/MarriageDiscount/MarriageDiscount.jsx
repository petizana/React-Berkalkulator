import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input
} from '@chakra-ui/react'
import Eligibility from "./components/Eligibility";

export default function MarriageDiscount({ updateSelectedMember, selectedMember }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [eligible, setEligible] = useState(false);
    // Mai dátum kivarázslása
    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    // Nullával kiegészített hónap és nap
    currentDay = currentDay < 10 ? `0${currentDay}` : currentDay;
    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
    const fullDate = `${currentYear}-${currentMonth}-${currentDay}`;

    function checkEligibility(event) {
        const [marriageYear, marriageMonth, marriageDay] = event.target.value.split("-");
        if ((currentYear - marriageYear === 0 && currentMonth - marriageMonth !== 0) ||
            (currentYear - marriageYear === 1) ||
            (currentYear - marriageYear === 2 && currentMonth - marriageMonth <= 0 && currentDay - marriageDay <= 0)
        ) {
            setEligible(true);
            updateSelectedMember({ ...selectedMember, marriage: true });
        }
        else {
            setEligible(false);
            updateSelectedMember({ ...selectedMember, marriage: false });
        }


    }

    return (
        <>
            <Button onClick={onOpen}>Dátum hozzáadása</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Dátum megadása</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár. <br />
                        <label htmlFor="start"><strong>Add meg a házasságkötés dátumá</strong>t</label>
                        <br />
                        <Input type="date" id="marriage" name="marriage" onChange={checkEligibility} max={fullDate} />
                        <br /><font size="1">Például: 2000-10-25</font>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Mentés
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Eligibility eligible={eligible}></Eligibility>
        </>
    )
}