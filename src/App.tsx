import React from 'react';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import AuthRoute from './AuthRoute';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRoute/>}></Route>
        <Route path="login" element={<LoginPage/>} />
        <Route path="join" element={<JoinPage/>} />
      </Routes>
    </div>
  );
}

export default App;
