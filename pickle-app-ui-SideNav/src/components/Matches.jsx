import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Paper,
  TextField,
  makeStyles,
  Box,
  Divider,
} from '@material-ui/core';
import Match from './Match';

const useStyles = makeStyles((theme) => ({
  matchPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  playerName: {
    fontWeight: 'bold',
  },
  rating: {
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
  },
  scoreInput: {
    width: '80px',
    marginRight: theme.spacing(2),
  },
  scoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Matches = ({ matches }) => {
  const classes = useStyles();

  const handleScoreChange = (index, player, event) => {
    // Handle score change here
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Matches
      </Typography>
      {matches.length === 0 ? (
        <Typography variant="body1" align="center">
          No matches found.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {matches.map((match, index) => (
            <Match
              key={index}
              match={match}
              index={index}
              handleScoreChange={handleScoreChange}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Matches;
