import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { logOut } from "../../redux/store/action/auth/authAction";

export const Header = () => {
  const sing = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  const outHandler = () => {
    dispatch(logOut())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          {!sing.token ? (
            <>
              <Button color="inherit">
                <Link to="/">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/registr">Sing up</Link>
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={outHandler}>
              Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
