import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <HouseholdSalaryCalculator />
    </ChakraProvider>
  );
}

export default App;
