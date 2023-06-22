import React, { useState } from 'react';
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
  Button,
} from '@material-ui/core';

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
  endMatchButton: {
    marginTop: theme.spacing(2),
  },
  endedMatch: {
    backgroundColor: theme.palette.success.light,
  },
}));

const Match = ({ match, index, handleScoreChange }) => {
  const classes = useStyles();
  const [isMatchEnded, setIsMatchEnded] = useState(false);

  const handleEndMatch = () => {
    setIsMatchEnded(true);
  };

  return (
    <Grid item xs={12}>
      <Paper
        elevation={3}
        className={`${classes.matchPaper} ${isMatchEnded && classes.endedMatch}`}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" className={classes.playerName}>
              {match.player1.firstName} {match.player1.lastName}
            </Typography>
            <Typography variant="subtitle2" className={classes.rating}>
              Rating: {match.player1.rating}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="center">
              vs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" align="right" className={classes.playerName}>
              {match.player2.firstName} {match.player2.lastName}
            </Typography>
            <Typography variant="subtitle2" align="right" className={classes.rating}>
              Rating: {match.player2.rating}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.scoreContainer}>
              <TextField
                label="P. 1"
                variant="outlined"
                className={classes.scoreInput}
                onChange={(event) => handleScoreChange(index, 'player1', event)}
                disabled={isMatchEnded}
              />
              <Typography variant="subtitle2">
                Game {index + 1}
              </Typography>
              <TextField
                label="P. 2"
                variant="outlined"
                className={classes.scoreInput}
                onChange={(event) => handleScoreChange(index, 'player2', event)}
                disabled={isMatchEnded}
              />
            </Box>
          </Grid>
          {!isMatchEnded && (
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.endMatchButton}
                onClick={handleEndMatch}
              >
                End Match
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Match;
