import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Dashboard from "./components/Dashboard";

import CreateUser from "./components/CreateUser";

import Login from "./components/Login";
import Home from "./components/Home";
import Poll from "./components/Poll";
import PieChartDemo from "./components/Pie";
import QuestionForm from "./components/QuestionForm";
import { ProtectedRoute } from "./components/Protected";
import SignUp from "./components/SignUp";
import UnAuth from "./components/UnAuth";
import DashboardUser from "./components/DashboardUser";

function App() {
  return (
    <div className="App"> 
      <Routes>
      <Route path="/result/:id" element={<PieChartDemo/>}/>
      <Route path="/poll/:id" element={<Poll/>}/>
      <Route path="/valid" element={<ProtectedRoute><QuestionForm/></ProtectedRoute>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<CreateUser/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/unauth" element={<UnAuth/>}/>
      <Route path="/dashboard" element={<DashboardUser/>}/>
      </Routes>
    </div>
  );
}
export default App;
