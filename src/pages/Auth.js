import * as React from 'react';
import TextField from '@mui/material/TextField/index';
import Card from '@mui/material/Card/index';
import CardContent from '@mui/material/CardContent/index';
import Button from '@mui/material/Button/index';
import Grid from '@mui/material/Grid/index';
import { makeStyles } from '@mui/styles/index';
import { useNavigate } from 'react-router-dom/index';

const useStyles = makeStyles((theme) => ({
  colorTextArea: {
    color: 'red',
  },
  label: {
    color: theme.palette.common.white,
    '&$focused': {
      color: theme.palette.common.white,
    },
  },
  focused: {
    color: theme.palette.common.white,
  },
  outlinedInput: {
    '&$focused $notchedOutline': {
      borderColor: theme.palette.common.white,
    },
    '& $notchedOutline': {
      border: `1px solid ${theme.palette.common.white}`,
    },
    '&:hover $notchedOutline': {
      border: `1px solid ${theme.palette.primary.light}`,
    },
  },
  notchedOutline: {},
  helperText: {
    color: theme.palette.error.light,
  },
}));

export const Auth = ({
  handleSubmit,
  loading,
  handleChange,
  errors,
  input,
}) => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className="authWrapper">
      <Card
        sx={{
          maxWidth: 375,
          margin: '0',
          position: 'absolute',
          top: '40%',
          left: '40%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <TextField
                  label="User Name"
                  variant="standard"
                  focused
                  disabled={loading}
                  errors={!!errors.userName}
                  autoFocus={true}
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  name="userName"
                  autoComplete="userName"
                  placeholder={'Enter User Name'}
                  onChange={handleChange}
                  helperText={errors.userName}
                  value={input.userName}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input,
                    },
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="standard"
                  focused
                  disabled={loading}
                  errors={!!errors.password}
                  autoFocus={false}
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  placeholder={'Enter Your Password'}
                  onChange={handleChange}
                  helperText={errors.password}
                  value={input.password}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input,
                    },
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className="authButton">
              <Button type="submit" variant="outlined">
                LOGIN
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
