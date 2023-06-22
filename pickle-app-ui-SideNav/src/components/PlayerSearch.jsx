import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper as MuiPaper,
} from '@material-ui/core';
import PlayerList from './PlayerList';
import Matches from './Matches'; // Assuming you have a Matches component

const PlayerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState(null); // State to hold the created matches

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('https://picknats.azurewebsites.net/players');
      setPlayers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    const filteredResults = players.filter(
      (player) =>
        player.firstName.toLowerCase().includes(value.toLowerCase()) ||
        player.lastName.toLowerCase().includes(value.toLowerCase()) ||
        player.email.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const addPlayer = (player) => {
    const isPlayerSelected = selectedPlayers.some((p) => p.id === player.id);

    if (!isPlayerSelected) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
  };

  const createMatches = () => {
    const sortedPlayers = selectedPlayers.slice().sort((a, b) => b.rating - a.rating);
    const pairings = [];

    while (sortedPlayers.length >= 2) {
      const player1 = sortedPlayers.pop();
      const player2 = sortedPlayers.pop();
      pairings.push({ player1, player2 });
    }

    setMatches(pairings);
  };

  // Render the Matches component when matches have been created
  if (matches) {
    return <Matches matches={matches} />;
  }

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Player Search
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="text"
            label="Search players"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12}>
          <PlayerList
            title="Search Results"
            players={searchResults}
            onPlayerClick={addPlayer}
            buttonLabel="Add"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Selected Players
          </Typography>
          <PlayerList
            title="Selected Players"
            players={selectedPlayers}
            onPlayerClick={removePlayer}
            buttonLabel="Remove"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={selectedPlayers.length < 2}
            onClick={createMatches}
          >
            Create Matches
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayerSearch;
