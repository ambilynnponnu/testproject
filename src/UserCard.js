import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;