import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";
import { Grid } from "@mui/material";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <div className="card">
        <Grid container spacing={3}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default App;
