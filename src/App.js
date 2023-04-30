import React from 'react';
import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
      <div className="App">
        <h2>Client Auth Project</h2>
        <header>
          <h2>FRIENDS DATABASE</h2>
          <div className="link-container">
            <Link className="link" to="login">LOGIN.</Link>
            <Link className="link" to="friends">FRIENDSLIST.</Link>
            <Link className="link" to="friends/add">ADDFRIEND.</Link>
            <Link className="link" to="logout">LOGOUT</Link>
          </div>

        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>

  );
}

export default App;
