import {BrowserRouter, Routes, Route} from "react-router";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import DetailUserView from "./views/DetailUserView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/login" element={<LoginView/>} />
        <Route path="/register" element={<RegisterView/>} />
        <Route path="/:username" element={<DetailUserView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
