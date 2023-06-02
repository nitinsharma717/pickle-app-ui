import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const CreatePlayer = () => {
  const [player, setPlayer] = useState({
    firstName: '',
    middleInitials: '',
    lastName: '',
    email: '',
    rating:''
  });
  const navigate  = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Basic form validation
    if (!player.firstName) {
        console.log('Please fill in first name');
        return;
    }
    if (!player.lastName) {
        console.log('Please fill in last name');
        return;
    }
    if (!player.email) {
        console.log('Please fill in email');
        return;
    }
    if (!player.rating) {
        console.log('Please fill in rating');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(player.email)) {
        console.log('Invalid email format');
        return;
    }

    try {
      const response = await axios.post('https://picknats.azurewebsites.net/players', player);
      
      // Redirect to the list of players
      navigate('/');
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
      </div>
      <div>
        <label>MiddleInitials:</label>
        <input type="middleInitials" name="middleInitials" onChange={handleChange} />
      </div>
      <div>
        <label>LastName:</label>
        <input type="lastName" name="lastName" onChange={handleChange} />
      </div>
      <div>
        <label>email:</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Rating:</label>
        <input type="rating" name="rating" onChange={handleChange} />
      </div>
      <button type="submit">Create Player</button>
    </form>
  );
};

export default CreatePlayer;
