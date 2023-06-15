import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';

const PlayerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Perform search logic here and update searchResults state
    // ...

    // For demonstration purposes, using sample search results
    const players = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'David Johnson' },
      { id: 4, name: 'Emily Davis' },
      { id: 5, name: 'Michael Wilson' },
      { id: 6, name: 'Olivia Taylor' },
      { id: 7, name: 'William Anderson' },
      { id: 8, name: 'Sophia Brown' },
      { id: 9, name: 'Jacob Clark' },
      { id: 10, name: 'Emma Martinez' },
      { id: 11, name: 'James Hernandez' },
      { id: 12, name: 'Ava Lewis' },
      { id: 13, name: 'Benjamin White' },
      { id: 14, name: 'Mia Robinson' },
      { id: 15, name: 'Daniel Young' },
      { id: 16, name: 'Charlotte Hill' },
      { id: 17, name: 'Joseph Hall' },
      { id: 18, name: 'Madison Adams' },
      { id: 19, name: 'Samuel Campbell' },
      { id: 20, name: 'Abigail Garcia' },
    ];

    const filteredResults = players.filter((player) =>
      player.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const addPlayer = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
  };

  const createMatches = () => {
    // Perform create matches logic here
    // ...
    console.log('Matches created:', selectedPlayers);
  };

  return (
    <Container maxWidth="md">
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
          <Paper variant="outlined" style={{ maxHeight: '200px', overflow: 'auto' }}>
            {searchResults.length > 0 ? (
              <List>
                {searchResults.map((player) => (
                  <ListItem key={player.id}>
                    <ListItemText primary={player.name} />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addPlayer(player)}
                    >
                      Add
                    </Button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1" align="center">
                No results found.
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Selected Players
          </Typography>
          <Paper variant="outlined" style={{ maxHeight: '200px', overflow: 'auto' }}>
            {selectedPlayers.length > 0 ? (
              <List>
                {selectedPlayers.map((player) => (
                  <ListItem key={player.id}>
                    <ListItemText primary={player.name} />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removePlayer(player)}
                    >
                      Remove
                    </Button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1" align="center">
                No players selected.
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={selectedPlayers.length === 0}
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


