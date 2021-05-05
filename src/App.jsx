import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Nav from "./components/Nav.jsx";
import AddPlace from "./pages/AddPlace.jsx";
import Profile from "./pages/Profile.jsx";
import List from "./pages/List.jsx";
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <Index></Index>
          </Route>
          <Route path="/addplace">
            <AddPlace></AddPlace>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/list">
            <List></List>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
