import { useReducer } from "react"
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import { initialState } from "./state/initialState";
import reducer from "./state/reducer";
import StateContext from "./state/StateContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <BrowserRouter>
      <StateContext.Provider value={{state,dispatch}}>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="admin" element={<AdminPage/>}/>
          </Routes>
        </Container>
      </StateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
