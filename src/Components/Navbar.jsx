import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  AppBar,
  Container,
  Toolbar,
  Button
} from '@mui/material'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import UserToolbar from './UserToolbar';
import { NavLink, useLocation } from 'react-router-dom';

const link = {color: 'white', display: 'block', textDecoration: "none" }

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  function Link(props){
    if (props.href == location.pathname){
      return (
        <MenuItem component="div" disabled onClick={handleCloseNavMenu}>
          <NavLink style={{textDecoration: "none", color: 'black'}} to={props.href}>{props.name}</NavLink>
        </MenuItem>
      );
    }
    else{
      return (
        <MenuItem component="div" onClick={handleCloseNavMenu}>
          <NavLink style={{textDecoration: "none", color: 'black'}} to={props.href}>{props.name}</NavLink>
        </MenuItem>
      );
    }
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* Мобильное меню */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent: "around" }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { md: 'block', lg: 'none' },
                }}
              >
                <Link href={"/org"} name='Организаторы'/>
                <Link href={"/cfp"} name='Приглашение к участию'/>
                <Link href={"/program"} name='Программа'/>
                <Link href={"/venue"} name='Место проведения'/>
                <Link href={"/submission"} name='Представление материалов'/>
                <Link href={"/reg"} name='Регистрация'/>
                <Link href={"/lastConf"} name="ИИАСУ'22"/>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { md: 'flex', lg: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              {/* ИИАСАУ'23 */}
              <NavLink style={link} to={"/"}>ИИАСАУ'23</NavLink>
            </Typography>
            
            
            {/*  */}

            {/* Десктоп меню */}
            <Typography
              variant="h6"
              noWrap
              href="/"
              component="a"
              sx={{
                mr: 2,
                display: { md: 'none', lg: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* ИИАСАУ'23 */}
              <NavLink style={link} to={"/"}>ИИАСАУ'23</NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { md: 'none', lg: 'flex' } }}>
              <Box sx={{mx: 1,}}>
                <NavLink style={link} to={"/org"}>Организаторы</NavLink>
              </Box>
              <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/cfp"}>Приглашение к участию</NavLink>
              </Box>
              <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/program"}>Программа</NavLink>
              </Box>
              <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/submission"}>Представление материалов</NavLink>
              </Box>
              <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/venue"}>Место проведения</NavLink>
              </Box>
              {/* <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/reg"}>Регистрация</NavLink>
              </Box> */}
              <Box sx={{mx: 1}}>
                <NavLink style={link} to={"/lastConf"}>ИИАСУ'22</NavLink>
              </Box>
              
            </Box>
            {/*  */}

            {/* Настройки */}
            <UserToolbar/>
            {/*  */}

          </Toolbar>
        </Container>
      </AppBar>
    </>
    
  );
}
export {Navbar};