import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import VehicleSearch from './components/VehicleSearch';
import GenerateQR from './components/GenerateQR';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <ThemeSwitcher />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/search" element={<VehicleSearch />} />
                    <Route path="/generate-qr" element={<GenerateQR />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
