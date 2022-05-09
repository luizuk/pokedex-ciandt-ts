import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pokedexRoutes } from "./navigation/routes";

function App() {
  return (
    <Router>
      <Routes>
        {pokedexRoutes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
