import {BrowserRouter, Routes, Route} from "react-router";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import DetailUserView from "./views/DetailUserView";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginView/>} />
          <Route path="/register" element={<RegisterView/>} />
        </Route>
        <Route element={<HomeLayout/>}>
          <Route path="/" element={<HomeView/>} />
          <Route path="/:username" element={<DetailUserView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
