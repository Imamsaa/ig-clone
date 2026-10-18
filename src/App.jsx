import {BrowserRouter, Routes, Route} from "react-router";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import DetailUserView from "./views/DetailUserView";
import AuthLayout from "./layouts/AuthLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:username" element={<DetailUserView/>} />
        <Route path="/" element={<HomeView/>} />
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginView/>} />
          <Route path="/register" element={<RegisterView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
