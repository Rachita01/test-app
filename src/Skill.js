import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SelectProject from './select-project';
import SelectEmployee from './Employee';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: "10%",
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
 }));
function AutoGrid() {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Grid container spacing={2}>
         <Grid item xs={3}>
           <Paper className={classes.paper}>Select Project</Paper>
         </Grid>
        <Grid item xs={3}>
         <Paper className={classes.paper}>
         <SelectProject/>
         </Paper>
        </Grid>
        <Grid item xs={3}>
           <Paper className={classes.paper}>Select Employee</Paper>
         </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
           <SelectEmployee/>
           </Paper>
        </Grid>
        </Grid>
      </div>);
}
export default AutoGrid;