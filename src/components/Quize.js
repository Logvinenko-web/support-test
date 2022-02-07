import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Chip, Avatar } from '@mui/material';
import cx from 'classnames/bind';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Alert from '@mui/material/Alert';
import ButtonAppBar from './Header';

const useStyles = makeStyles((theme) => ({
  quizeWrapper: {
    height: '90vh',
  },
  chip: {
    padding: '35px',
    textAlign: 'left',
  },
  root: {
    verticalAlign: 'left',
    backgroundColor: theme.palette.primary.light,
    '&&:hover': {
      backgroundColor: theme.palette.success.light,
    },
    '& $avatar': {
      marginLeft: 5,
      marginRight: -6,
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      width: 40,
      height: 40,
    },
  },

  avatar: {
    width: 40,
    height: 40,
  },
  clickable: {
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer',
    '&&:focus': {
      backgroundColor: theme.palette.warning.light,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
    },
  },
  header: {
    marginBottom: '60px',
  },
}));

const Quize = () => {
  const classes = useStyles();

  return (
    <Grid
      Grid
      container
      spacing={4}
      className={classes.quizeWrapper}
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={12} className={classes.header}>
        <ButtonAppBar />
      </Grid>
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        className={classes.questionWrapper}
      >
        <Grid item justifySelf="center">
          <Alert
            icon={<QuestionMarkIcon fontSize="inherit" />}
            severity="success"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deserunt esse eum expedita magni molestias repudiandae
            sunt, temporibus. Accusantium ad aliquam, animi at autem beatae
            corporis cum debitis deserunt dolor earum eius error et eveniet
            explicabo facere fuga fugit incidunt maiores minima molestias
            necessitatibus nesciunt perferendis quibusdam quisquam quos ratione
            rerum tempora veritatis voluptatum! Adipisci, alias animi aspernatur
            dignissimos, dolor dolore doloremque eius enim expedita illo illum
            ipsa labore laborum minus modi nemo neque optio perspiciatis
            quibusdam, quidem quis reiciendis repellat sapiente suscipit
            tenetur. Adipisci aliquam aperiam blanditiis explicabo laudantium
            provident quaerat quos recusandae sequi voluptates? Animi aperiam,
            at dignissimos numquam possimus temporibus veniam voluptas. Autem,
            beatae dignissimos expedita ipsam iste iure maxime necessitatibus
            numquam rerum tempore? Commodi consectetur dignissimos est eum
            facere id impedit laboriosam maiores natus, nihil nisi perspiciatis,
            possimus, totam. Beatae iste quibusdam rerum? A, doloremque esse
            minus nam neque pariatur quam repudiandae sint! Ad consequatur
            error, explicabo hic illum ipsa nam nobis optio perferendis quia,
            quod repellendus! Dolorum enim est incidunt, laborum maxime minima
            natus, necessitatibus nemo nesciunt nihil nisi officiis provident
            quas quasi reprehenderit sunt unde vitae? Ab corporis deleniti,
            dolores ducimus eligendi est harum hic laboriosam magnam magni
            minima nesciunt numquam rerum soluta voluptas.
          </Alert>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Chip
              clickable
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                clickable: classes.clickable,
              }}
              className={cx(classes.chip)}
              label="lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb"
              variant="outlined"
              avatar={<Avatar>A</Avatar>}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Chip
              clickable
              className={classes.chip}
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                clickable: classes.clickable,
              }}
              label="lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb"
              variant="outlined"
              avatar={<Avatar>B</Avatar>}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Chip
              clickable
              className={classes.chip}
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                clickable: classes.clickable,
              }}
              label="lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb"
              variant="outlined"
              avatar={<Avatar>C</Avatar>}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Chip
              clickable
              className={classes.chip}
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                clickable: classes.clickable,
              }}
              label="lorem550gosirghosghoslsdjbvskbosvbo  asdvbsdvb"
              variant="outlined"
              avatar={<Avatar>D</Avatar>}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quize;
