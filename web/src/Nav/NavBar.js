import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false
        }
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget, open: true });
    };

    handleClose = () => {
        this.setState({ anchorEl: null, open: false });
    };

    handleClickAway = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className='flexGrow1'>
                        Bill Tracker
                    </Typography>
                    <div>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <IconButton
                                aria-owns={this.state.open ? 'menu-appbar' : null}
                                aria-haspopup='true'
                                onClick={this.handleMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                        </ClickAwayListener>
                        <Menu
                            id='menu-appbar'
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={this.state.open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Add Bills</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;