import React from 'react';
import { Grid, Paper, makeStyles, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bracketContainer: {
    margin: 'auto',
    maxWidth: 600,
  },
  match: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows[1],
  },
  teamsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexBasis: '50%',
    overflow: 'hidden',
  },
  team: {
    flex: '1 1 auto',
    textAlign: 'center',
    padding: theme.spacing(1),
    fontWeight: 'bold',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  versus: {
    flexBasis: '10%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexBasis: '50%',
  },
  scoreInput: {
    width: '60px',
    textAlign: 'center',
  },
  doneButton: {
    padding: theme.spacing(1),
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 12,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    marginLeft: theme.spacing(2),
  },
}));

const Bracket = () => {
  const classes = useStyles();

  const matches = [
    { team1: 'John Doe', team2: 'Jane Smith' },
    { team1: 'Mike Johnson', team2: 'Sarah Thompson' },
    { team1: 'Chris Davis', team2: 'Lisa Anderson' },
    { team1: 'Mark Wilson', team2: 'Emily Brown' },
  ];

  return (
    <Grid container className={classes.bracketContainer}>
      {matches.map((match, index) => (
        <Grid item key={index} xs={12}>
          <Paper className={classes.match}>
            <div className={classes.teamsContainer}>
              <Typography variant="body1" className={classes.team}>
                {match.team1}
              </Typography>
              <Typography variant="body1" className={classes.versus}>
                vs.
              </Typography>
              <Typography variant="body1" className={classes.team}>
                {match.team2}
              </Typography>
            </div>
            <div className={classes.scoreContainer}>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                inputProps={{ min: 0 }}
                className={classes.scoreInput}
                placeholder="Score"
              />
              <Typography variant="body1" className={classes.versus}>
                -
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                inputProps={{ min: 0 }}
                className={classes.scoreInput}
                placeholder="Score"
              />
            </div>
            <div className={classes.finishMatchContainer}>
              <Button variant="outlined" className={classes.doneButton}>
                Done
              </Button>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Bracket;
