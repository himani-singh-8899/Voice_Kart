import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "12px 16px",
    margin: "0 8px",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: "#0066c0",
    },
  },
  logoStyle: {
    marginRight: "16px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  avatarStyle: {
    backgroundColor: "#fff",
    color: "#0066c0",
  },
}));

const settings = ["Profile", "Logout"];

export default function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const handleOpenNavMenu = () => {
    setIsDrawerOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Logout") {
      // Handle logout logic
    }
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = (path) => {
    props.Redirectpath(path);
    setIsDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="/" className={classes.logoStyle}>
                <img
                  src="/path/to/walmart-logo.png"
                  // alt="Walmart Logo"
                  height={24}
                  width={24}
                  style={{ marginRight: theme.spacing(1) }}
                />
                <div style={{color:"white",fontSize:'30px',fontWe:'600'}}>Walmart</div>
                
              </a>
            </Typography>
            <Box>
              <Button
                className={classes.menuStyle}
                onClick={() => handleCloseNavMenu("/homepage")}
              >
                Home
              </Button>
              <Button
                className={classes.menuStyle}
                onClick={() => handleCloseNavMenu("/about")}
              >
                About Us
              </Button>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  aria-label="user-menu"
                >
                  <Avatar
                    alt="User Avatar"
                    src="/static/images/avatar/2.jpg"
                    className={classes.avatarStyle}
                  />
                </IconButton>
              </Tooltip>
              <Menu
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: theme.spacing(2),
          }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: theme.spacing(2),
            }}
          >
            <img
              src="/path/to/walmart-logo.png"
              // alt="Walmart Logo"
              height={24}
              width={24}
              style={{ marginRight: theme.spacing(1) }}
            />
            <Typography variant="h6">Walmart</Typography>
          </Box>
          <List>
            <ListItem button onClick={() => handleCloseNavMenu("/homepage")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleCloseNavMenu("/about")}>
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {settings.map((setting) => (
              <ListItem
                button
                key={setting}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <ListItemText primary={setting} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
