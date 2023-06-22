import { TextField, Button, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4), // Add desired padding value here
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CreatePlayer = () => {
  const [player, setPlayer] = useState({
    firstName: '',
    middleInitials: '',
    lastName: '',
    email: '',
    rating:''
  });
  const classes = useStyles();
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
      
      alert("Player Succesfully Added")
      // Redirect to the list of players
      navigate('/');
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message
    }
  };



  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" component="h1" align="center">
        Create Player
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        fullWidth
        value={player.firstName}
        onChange={handleChange}
        name="firstName" // Update the name attribute
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Middle Initials"
        fullWidth
        value={player.middleInitials}
        onChange={handleChange}
        name="middleInitials" // Update the name attribute
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Last Name"
        fullWidth
        value={player.lastName}
        onChange={handleChange}
        name="lastName" // Update the name attribute
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Email"
        fullWidth
        value={player.email}
        onChange={handleChange}
        name="email" // Update the name attribute
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Rating"
        fullWidth
        value={player.rating}
        onChange={handleChange}
        name="rating" // Update the name attribute
        margin="normal"
        variant="outlined"
      />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CreatePlayer;
