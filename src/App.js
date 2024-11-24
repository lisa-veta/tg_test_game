import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SchedulePage from "./pages/SchedulePage";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<SchedulePage />} />
            <Route path="/attendance/:subjectId" element={<AttendancePage />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;

