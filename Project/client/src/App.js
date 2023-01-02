import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Dashboard from "./components/Dashboard";

import CreateUser from "./components/CreateUser";

import Login from "./components/Login";
import Home from "./components/Home";
import Poll from "./components/Poll";
import PieChartDemo from "./components/Pie";

function App() {
  return (
    <div className="App"> 
      <Routes>
      <Route path="/result/:id" element={<PieChartDemo/>} />
      <Route path="/poll/:id" element={<Poll/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<CreateUser/>}/>
      <Route path="/dashboard" element={ <Dashboard/>}/>
      </Routes>
    </div>
  );
}
export default App;
