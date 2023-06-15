import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Player {
  id: number;
  firstName: string;
  middleInitials: string;
  lastName: string;
  email: string;
  rating: string;
}

function Player() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('https://picknats.azurewebsites.net/players');
      setPlayers(response.data.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (playerId: number) => {
    try {
      await axios.delete(`https://picknats.azurewebsites.net/players/${playerId}`);
      console.log('Player deleted successfully');
      fetchPlayers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {players.length === 0 ? (
        <div className="text-center">
          <Typography variant="h5">No players found at the moment</Typography>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>MI</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.firstName}</TableCell>
                  <TableCell>{item.middleInitials}</TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.rating}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button component={Link} to={`/edit/${item.id}`} variant="outlined">
                        Edit Player
                      </Button>
                      <Button variant="contained" onClick={() => deleteUser(item.id)}>
                        Delete Player
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Player;
