import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      {localStorage.setItem('chakra-ui-color-mode', 'dark')}
      <HouseholdSalaryCalculator />
    </ChakraProvider>
  );
}

export default App;
