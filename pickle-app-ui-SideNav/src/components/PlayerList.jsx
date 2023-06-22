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



const PlayerList = ({ title, players, onPlayerClick, buttonLabel }) => {
    return (
      <MuiPaper variant="outlined" style={{ maxHeight: '200px', overflow: 'auto' }}>
        {players.length > 0 ? (
          <List>
            {players.map((player) => (
              <ListItem key={player.id}>
                <ListItemText primary={`${player.firstName} ${player.lastName}`} />
                <Button
                  variant="contained"
                  color={buttonLabel === 'Remove' ? 'secondary' : 'primary'}
                  onClick={() => onPlayerClick(player)}
                >
                  {buttonLabel}
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" align="center">
            No players found.
          </Typography>
        )}
      </MuiPaper>
    );
  };

  export default PlayerList;