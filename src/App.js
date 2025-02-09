import React from 'react';
import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import Protected from './components/Protected';

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
          <Route 
            path="/friends" 
            element={
              <Protected token={localStorage.getItem("token")}>
                <FriendsList />
              </Protected>
            } 
          />
          <Route 
            path="/friends/add" 
            element={
              <Protected token={localStorage.getItem("token")}>
                <AddFriend />
              </Protected>
            } 
          />
                    <Route 
            path="/logout" 
            element={
              <Protected token={localStorage.getItem("token")}>
                <Logout />
              </Protected>
            } 
          />
        </Routes>
      </div>

  );
}

export default App;
