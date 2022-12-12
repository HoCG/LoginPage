import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRoute/>}></Route>
        <Route path="login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
