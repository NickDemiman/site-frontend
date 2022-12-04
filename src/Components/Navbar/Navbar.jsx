import { Box, Typography, AppBar, Container, Toolbar, } from '@mui/material'
import * as React from 'react';
import UserToolbar from './UserToolbar';
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';

const link = {color: 'white', display: 'block', textDecoration: "none" }

function Navbar() {

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <BurgerMenu/>

            <Typography
              variant="h6"
              noWrap
              href="/"
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
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
            
            <UserToolbar/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
    
  );
}
export {Navbar};