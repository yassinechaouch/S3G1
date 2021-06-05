import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import { Responsive, userLogout } from 'react-admin';
import { connect } from 'react-redux';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';


const MyLogoutButton = ({ userLogout, ...rest }) => (
    <Responsive
        xsmall={
            <MenuItem
                onClick={userLogout}
                
            >
                <ExitIcon /> Logout
            </MenuItem>
        }
        medium={
            <Button
                onClick={userLogout}
                size="small"
               
            >
                <ExitIcon /> Logout
            </Button>
        }
    />
);
 const redirectTo = '/';
const myCustomUserLogout = () => userLogout(redirectTo);
export default connect(undefined, { userLogout: myCustomUserLogout })(MyLogoutButton);