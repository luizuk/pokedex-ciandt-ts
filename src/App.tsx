import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pokedexRoutes } from "./navigation/routes";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./global/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {pokedexRoutes.map((route, key) => {
            return <Route key={key} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
