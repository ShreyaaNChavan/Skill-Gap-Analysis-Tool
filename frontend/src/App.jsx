import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SkillInputForm from "./components/SkillInputForm";
import Dashboard from "./components/Dashboard";
import SkillAnalyzer from "./components/SkillAnalyzer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skill-input" element={<SkillInputForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyze" element={<SkillAnalyzer />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
