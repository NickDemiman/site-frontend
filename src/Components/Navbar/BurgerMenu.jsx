import { Box, IconButton, Typography, Menu, MenuItem} from '@mui/material'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import {linkStyle} from '../../style';

export default function BurgerMenu () {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      function Link(props){
        if (props.href === location.pathname){
          return (
            <MenuItem component="div" disabled onClick={handleCloseNavMenu}>
              <NavLink style={linkStyle} to={props.href}>{props.name}</NavLink>
            </MenuItem>
          );
        }
        else{
          return (
            <MenuItem component="div" onClick={handleCloseNavMenu}>
              <NavLink style={linkStyle} to={props.href}>{props.name}</NavLink>
            </MenuItem>
          );
        }
      }

    return (
        <>
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
                <NavLink style={linkStyle} to={"/"}>ИИАСАУ'23</NavLink>
            </Typography>
        </>
    );
}