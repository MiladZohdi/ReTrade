import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./pages/Login";
import StyledForm from "./ui/StyledNavLink";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />}>
          <Route path="log" element={<Login />} />
          <Route path="sign" element={<Login />} />
        </Route>
        <Route path="/app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
