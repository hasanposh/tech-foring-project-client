import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const pages = [
  { title: "Jobs", path: "/jobs" },
  { title: "Add Jobs", path: "/add-jobs" },
  { title: "My Jobs", path: "/my-jobs" },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logOut();
    handleCloseUserMenu();
  };

  const settings = [
    { title: "Profile", action: handleCloseUserMenu },
    { title: "Logout", action: handleLogout },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#182f59" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            className="uppercase"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Job Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to={page.path}
                      className={({ isActive }) =>
                        isActive ? "text-blue-400 border-b border-blue-400" : ""
                      }
                    >
                      {page.title}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, gap: 5, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={page.path}
                onClick={handleCloseNavMenu}
                className={({ isActive }) =>
                  isActive ? "text-blue-400 border-b border-blue-400" : ""
                }
              >
                {page.title}
              </NavLink>
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.displayName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.photoURL} />
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
                    key={setting.title}
                    onClick={setting.action}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button variant="contained">
              <Link to={"login"}>Login</Link>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
