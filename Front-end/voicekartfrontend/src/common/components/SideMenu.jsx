import React,{useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Tooltip from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Avatar from '@mui/material/Avatar';
import { Outlet } from 'react-router-dom';
import Machint from '../../assests/images/Machint.svg';
import Container from '@mui/material/Container';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import InventoryIcon from '@mui/icons-material/Inventory';
import QueryStatsIcon from '@mui/icons-material/QueryStats'; 
import ApiIcon from '@mui/icons-material/Api';
const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: 'red',
    color: '#ffffff',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

 export default function Dashboard(props) {
  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const toggleDrawer = () => {
    setOpen(!open);
   
  };
  const handleCloseUserMenu = (setting) => {
    if (setting == "Logout") {
      props.Redirectpath("/")
    }
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const settings = ["Profile", "Logout"];
  const mainListItems = (
    <React.Fragment>    
      <ListItemButton onClick={()=>changeHandler("/dashboard/Home")}>
        <ListItemIcon style={{color:'white'}}>
        <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton  onClick={()=>changeHandler('/dashboard/dataSet')}>
        <ListItemIcon style={{color:'white'}}>
        <DatasetLinkedIcon/>
        </ListItemIcon>
        <ListItemText primary="Add Dataset"/>
      </ListItemButton>
      <ListItemButton onClick={()=>changeHandler('/dashboard/ProductTable')}>
        <ListItemIcon style={{color:'white'}}>
     <InventoryIcon/> 
        </ListItemIcon>
        <ListItemText primary="Product List" />
      </ListItemButton>
      <ListItemButton  onClick={()=>changeHandler('/dashboard/pfe-analysis')}>
        <ListItemIcon style={{color:'white'}}>
        <QueryStatsIcon/>
        </ListItemIcon>
        <ListItemText primary="PFE-Analysis" />
      </ListItemButton>
      <ListItemButton  onClick={()=>changeHandler('/dashboard/manageApi')}>
        <ListItemIcon style={{color:'white'}}>
        <ApiIcon/>
        </ListItemIcon>
        <ListItemText primary="API Analyis" />
      </ListItemButton>
    </React.Fragment>
  );
  
  // const secondaryListItems = (
  //   <React.Fragment>
  //     {/* <ListSubheader component="div" inset>
  //       Saved reports
  //     </ListSubheader> */}
  //     <ListItemButton onClick={()=>changeHandler("settings")}>
  //       <ListItemIcon>
  //         {/* <img src={settings}/> */}
  //       </ListItemIcon>
  //       <ListItemText primary="Settings" />
  //     </ListItemButton>
  //     <ListItemButton onClick={()=>changeHandler("/SignIn")}>
  //       <ListItemIcon>
  //        {/* <img src={Logout}/> */}
  //       </ListItemIcon>
  //       <ListItemText primary="Log Out"  />
  //     </ListItemButton>
      
  //   </React.Fragment>
  // );
  const changeHandler =(path)=>{   
  props.Redirectpath(path);   
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              background: '#FFFFFF',
            }}
          >
            <div>
              <IconButton onClick={toggleDrawer}>
                <MenuRoundedIcon  style={{color:'#5ab7a7'}}/>
              </IconButton>
            </div>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            
            <IconButton
              size="small"
              sx={{ ml: 2 }}
            >
              {/* <Avatar sx={{ width: 32, height: 32 }}></Avatar> */}
              <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                style={{ color: "whitw", background: "#5ab7a7" }}
              />
            </IconButton>
          </Tooltip>
              <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          containerStyle={{ backgroundColor: 'black' }}
          sx={{
            "& .MuiDrawer-paper": {
              background:'#5ab7a7',
              padding:'15px'
            },
          }}
          variant="permanent"
          open={open}
        >
            <Box sx={{paddingLeft:'20px',paddingBottom:'15px'}}>
            <div>
              <img width="90%"  src={Machint} />
            </div>
          </Box>
          <div>
            <div>
              <List component="nav">
                {mainListItems}
                {/* <Divider sx={{ my: 1 }} />*/}
              </List>
            </div>
            {/* <div style={{ paddingTop:'40%'}}>
              <List component="nav">
                {secondaryListItems}
              </List> */}
            {/* </div> */}
          </div>
          {/* <Divider /> */}
        </Drawer>
       
        <Box
          component="main"
          sx={{
            backgroundColor:"#DDF4F1",
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            padding:"10px"
          }}
        >
          {/* <Container>       */}
          <Toolbar />
          <Outlet />
          {/* </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}



