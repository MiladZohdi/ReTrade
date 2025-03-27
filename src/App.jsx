import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import WelcomePage from "./pages/WelcomePage";
import SavedAds from "./pages/SavedAds";
import MyAds from "./pages/MyAds";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />}>
          <Route path="log" element={<Login />} />
          <Route path="sign" element={<Login />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<WelcomePage />} />
          <Route path="saved-ads" element={<SavedAds />} />
          <Route path="my-ads" element={<MyAds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
