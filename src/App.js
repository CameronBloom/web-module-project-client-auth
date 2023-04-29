import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
      <div className="App">
        <h2>Client Auth Project</h2>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>

  );
}

export default App;
