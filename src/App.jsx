import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CardDetails from "./Pages/CardDetails";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />                {/* Home + Login/Signup */}
        <Route path="/card-details" element={<CardDetails />} />  {/* Card input page */}
        <Route path="/dashboard" element={<Dashboard />} />       {/* Dashboard with graph */}
      </Routes>
    </Router>
  );
}

export default App;
