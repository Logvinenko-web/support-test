import React, { useState } from 'react';
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
  const [index, setIndex] = useState(0);

  const data = [
    {
      id: 1,
      content: 'what is the color?',
      createdAt: '2022-02-07T08:46:33.577Z',
      updatedAt: '2022-02-07T08:46:33.577Z',
      variants: [
        {
          id: 9,
          variant: 'yellow',
          isCorrect: true,
          createdAt: '2022-02-07T08:46:33.577Z',
          updatedAt: '2022-02-07T08:46:33.577Z',
        },
        {
          id: 10,
          variant: 'green',
          isCorrect: false,
          createdAt: '2022-02-07T08:46:33.577Z',
          updatedAt: '2022-02-07T08:46:33.577Z',
        },
        {
          id: 11,
          variant: 'blue',
          isCorrect: false,
          createdAt: '2022-02-07T08:46:33.577Z',
          updatedAt: '2022-02-07T08:46:33.577Z',
        },
        {
          id: 12,
          variant: 'dark',
          isCorrect: false,
          createdAt: '2022-02-07T08:46:33.577Z',
          updatedAt: '2022-02-07T08:46:33.577Z',
        },
      ],
    },
    {
      id: 2,
      content: 'what is the color?',
      createdAt: '2022-02-07T08:47:12.396Z',
      updatedAt: '2022-02-07T08:47:12.396Z',
      variants: [
        {
          id: 13,
          variant: 'cc',
          isCorrect: true,
          createdAt: '2022-02-07T08:47:12.396Z',
          updatedAt: '2022-02-07T08:47:12.396Z',
        },
        {
          id: 14,
          variant: 'cc',
          isCorrect: false,
          createdAt: '2022-02-07T08:47:12.396Z',
          updatedAt: '2022-02-07T08:47:12.396Z',
        },
        {
          id: 15,
          variant: 'ss',
          isCorrect: false,
          createdAt: '2022-02-07T08:47:12.396Z',
          updatedAt: '2022-02-07T08:47:12.396Z',
        },
        {
          id: 16,
          variant: 'cc',
          isCorrect: false,
          createdAt: '2022-02-07T08:47:12.396Z',
          updatedAt: '2022-02-07T08:47:12.396Z',
        },
      ],
    },
  ];
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
            {data[index].content}
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
        {data[index].variants.map((item, i) => (
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
                onClick={() => setIndex(index + 1)}
                clickable
                classes={{
                  root: classes.root,
                  avatar: classes.avatar,
                  clickable: classes.clickable,
                }}
                className={cx(classes.chip)}
                label={item.variant}
                variant="outlined"
                avatar={<Avatar>A</Avatar>}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Quize;
