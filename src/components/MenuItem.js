import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const MenuItemAppBar = ({name, redirectTo}) => {
    return <MenuItem onClick={redirectTo}>
        <Typography  textAlign="center">{name}</Typography>
    </MenuItem> 
}