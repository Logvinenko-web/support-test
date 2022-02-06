import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Chip, Avatar } from '@mui/material';
import cx from 'classnames/bind';
const useStyles = makeStyles((theme) => ({
    quizeWrapper: {
        height: '100vh',

    },
    chip: {
        padding: '50px',
        textAlign: 'left',

        
    },
    root: {
        "&&:hover": {
          borderColor: "white",
          backgroundColor: theme.palette.success.light,
          color: 'white'
        }
      }
      
    
}))

const Quize = () => {
    const classes = useStyles()
  
    return (
        <Grid Grid container
            spacing={4}
            className={classes.quizeWrapper}
        >
            <Grid item container xs={12}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>Question</Grid>
            </Grid>
            <Grid item container spacing={4}
                justifyContent="center"
                alignItems="center"
            >
                <Grid container item xs={12} sm={6} justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Chip clickable className={classes.chip} classes={{root:classes.root}} label='lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb' variant="outlined" avatar={<Avatar>A</Avatar>} />

                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Chip clickable className={classes.chip} classes={{root:classes.root}} label='lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb' variant="outlined" avatar={<Avatar>B</Avatar>} />

                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Chip clickable className={classes.chip} classes={{root:classes.root}} label='lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb' variant="outlined" avatar={<Avatar>C</Avatar>} />

                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Chip clickable className={classes.chip} classes={{root:classes.root}} label='lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb' variant="outlined" avatar={<Avatar>D</Avatar>} />

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default Quize;