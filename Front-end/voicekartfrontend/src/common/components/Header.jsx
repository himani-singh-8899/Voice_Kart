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
import MachintLogo from '../../assests/images/Machint.svg'

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    color: "#444444",
    cursor: "pointer",
    padding: "10px",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(0.8)",
      color: "#AB26A3",
    },
    "&:active": {
      color: "red",
      boxShadow: "inset 1px 0px 3px 4px #948bb94d",
      transform: "scale(0.6)",
      borderRadius: "7px",
    },
  },
}));
const settings = ["Profile", "Logout"];
// const pages = [
//   { name: "Home", path: "/homepage" },
//   { name: "About Us", path: "/" },
// ];

export default function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();
  console.log(props, "propsssss");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (setting) => {
    if (setting == "Logout") {
    }
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = (path) => {
    console.log(path);
    props.Redirectpath(path);
  };

  return (
    <AppBar
      position="fixed"
      style={{ background: "#fff", padding: "0px 30px" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 100 }}
    >
      <Toolbar disableGutters>
        <img src={MachintLogo} width="120px" />
        <Box
          sx={{
            flexGrow: 2,
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "17px",
          }}
        >
          {/* {pages.map((page, index) => (
            <div
              key={index}
              onClick={() => handleCloseNavMenu(page.path)}
              className={classes.menuStyle}
            >
              {page.name}
            </div>
          ))} */}
        </Box>
        &nbsp;
        <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                style={{ color: "#001045", background: "#f1fcff" }}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
