import React from 'react';
import propTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Logout from './logout';
import { useHistory } from 'react-router-dom';
// import SearchBar from './searchBar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 64,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#FFFFFF',
  },
  button: {
    color: '#FFFFFF',
  },
  avatar: {
    // fontSize: '50px',
    // width: 'auto',
    // height: 'auto',
    backgroundColor: '#ec407a',
  },
  icones:{
    background: "white",
  },
  search: {
    width: '60ch',
    borderRadius: theme.shape.borderRadius,
    background: "white"
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#004d40',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ec407a',
    },
  },
});
const LandingLayout = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [recipeSearch, setRecipeSearch] = React.useState([]);
  const history = useHistory();
  const uid = localStorage.getItem('uid');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const searchData = (search) => {
    setRecipeSearch(search);
  }
  const name = localStorage.getItem('name');
  const classes = useStyles();
  // const logged = useSelector(state => state.authCheck);
  return (
    <div>
      {/* {logged ? <h1>YOU ARE LOGGED IN!</h1> : <h1> YOU ARE LOGGED OUT!</h1>} */}
      <ThemeProvider theme={theme}>
        <AppBar className={classes.toolbar} position="static" color="primary">
          <Toolbar>
            {/* <div style={{ width: '100%' }}> */}
              <Box display="flex" p={1} justify="center" alignItems="center" style={{ width: '100%' }}>
                <Box p={1} width="35%">
                  <Button className={classes.title}>
                    <Typography variant="body1" >
                      My Recipes
                    </Typography>
                  </Button>
                </Box>
                <Box p={1} flexShrink={0}>
                  <IconButton className={classes.icons}>
                    <NotificationsIcon />
                  </IconButton>
                </Box>
                <Box p={1} flexShrink={0}>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.button}>

                    <Typography variant="body1" color='overrides'>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {name[0]}
                      </Avatar>
                    </Typography>
                  </Button>
                </Box>
              </Box>
            {/* </div> */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Button onClick={() => history.push('/dashboard')}>Dashboard</Button></MenuItem>
              <MenuItem onClick={handleClose}><Button onClick={() => history.push(`/${uid}/recipes/search=self`)}>Recipes</Button></MenuItem>
              <MenuItem onClick={handleClose}><Button onClick={() => history.push('/dashboard/edit')}>Edit Profile</Button></MenuItem>
              <MenuItem ><Logout /></MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <div>
        {props.children}
      </div>
    </div>
  );
}
LandingLayout.propTypes = {
  children: propTypes.node
}

export default LandingLayout;
