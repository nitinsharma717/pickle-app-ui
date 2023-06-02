import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate , useParams } from 'react-router-dom';

const UpdatePlayer = () => {
  const { playerId } = useParams();
  const [firstName, setFirstName] = useState('');
  const [middleInitials, setMiddleInitials] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const navigate  = useNavigate();

  useEffect(() => {
    fetchPlayer(playerId);
  }, [playerId]);

  const fetchPlayer = async (playerId) => {
    try {
      const response = await fetch(`https://picknats.azurewebsites.net/players/${playerId}`);
      const player = await response.json();
      setFirstName(player.firstName);
      setMiddleInitials(player.middleInitials);
      setLastName(player.lastName);
      setEmail(player.email);
      setRating(player.rating);
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  };

  const handleFirstNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setFirstName(e.target.value);
  };

  const handleMiddleInitialsChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMiddleInitials(e.target.value);
  };

  const handleLastNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLastName(e.target.value);
  };

  const handleRatingChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setRating(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

    // Perform any necessary validation here

    // Create the updated player object
    const updatedPlayer = {
      firstName,
      middleInitials,
      lastName,
      rating,
      email,
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    // Basic form validation
    if (!updatedPlayer.firstName) {
        console.log('Please fill in first name');
        return;
    }
    if (!updatedPlayer.lastName) {
        console.log('Please fill in last name');
        return;
    }
    if (!updatedPlayer.email) {
        console.log('Please fill in email');
        return;
    }
    if (!updatedPlayer.rating) {
        console.log('Please fill in rating');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(updatedPlayer.email)) {
        console.log('Invalid email format');
        return;
    }

    // Perform any API call or action to update the user
    try {
        const url = 'https://picknats.azurewebsites.net/players/'+ playerId;
        await axios.put(url, updatedPlayer);
      
        // Redirect to the list of players
        navigate('/');
      } catch (error) {
        console.error(error);
      }

    // Show a success message or perform any additional actions
  };

  return (
    <div>
      <h1>Update Player</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label>Middle Initials:</label>
          <input type="text" value={middleInitials} onChange={handleMiddleInitialsChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" value={rating} onChange={handleRatingChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
  };

export default UpdatePlayer;
