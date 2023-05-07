import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import Balance from "./pages/Balance";
import Calendar from "./pages/Calendar";
import Dashboard from './pages/Dashboard';
import Events from "./pages/Events";
import Login from "./pages/Login/Index";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />  
        <Route path="/events" element={<RequireAuth><Events /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/team" element={<RequireAuth><Team /></RequireAuth>} />
        <Route path="/balance" element={<RequireAuth><Balance /></RequireAuth>} />
        <Route path="/tasks" element={<RequireAuth><Tasks /></RequireAuth>} />
        <Route path="/calendar" element={<RequireAuth><Calendar /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
