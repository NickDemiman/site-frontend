import {
    Avatar,
    Tooltip,
    Box,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Button
} from '@mui/material'
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const settings = ['Личный кабинет', 'Материалы', 'Выйти'];

function UserToolbar () {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    

    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

    const redirect = (props) => {
        handleCloseUserMenu();
        console.log('click');
    };

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Настройки">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon fontSize='large'/>
                </IconButton>
                </Tooltip>
            {/* <NavLink to="/reg">Регистрация</NavLink> */}
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem component='div' onClick={handleCloseUserMenu}>
                        {/* <Button>Личный кабинет</Button> */}
                        <Link to={"/profile"}>Личный кабинет</Link>
                    </MenuItem>
                </Menu>
            </Box>
        </>
        
    );
}

export default UserToolbar;
