import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4), // Add desired padding value here
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const UpdatePlayer = () => {
  const { playerId } = useParams();
  const [firstName, setFirstName] = useState('');
  const [middleInitials, setMiddleInitials] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();


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

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleInitialsChange = (e) => {
    setMiddleInitials(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const updatedPlayer = {
    firstName,
    middleInitials,
    lastName,
    rating,
    email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(updatedPlayer.email)) {
      console.log('Invalid email format');
      return;
    }

    try {
      const url = `https://picknats.azurewebsites.net/players/${playerId}`;
      await axios.put(url, updatedPlayer);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" component="h1" align="center">
        Update Player
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <TextField
          label="Middle Initials"
          variant="outlined"
          fullWidth
          margin="normal"
          value={middleInitials}
          onChange={handleMiddleInitialsChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Rating"
          variant="outlined"
          fullWidth
          margin="normal"
          value={rating}
          onChange={handleRatingChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update
        </Button>
      </form>
    </Container>
  );
};

export default UpdatePlayer;
