import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/project" element={<ProjectPage />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
