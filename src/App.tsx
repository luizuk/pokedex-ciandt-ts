import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./global/theme";
import AllRoutes from "./navigation/routes";
import Navbar from "./components/Navigation/Navbar"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
