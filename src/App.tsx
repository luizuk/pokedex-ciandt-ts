import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./global/theme";
import AllRoutes from "./navigation/routes";
import Navbar from "./components/Navigation/Navbar"
import { DataProvider } from './contexts/DataProvider';

function App() {
  return (
    <DataProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        <AllRoutes />
      </ChakraProvider>
    </DataProvider>
  );
}

export default App;
