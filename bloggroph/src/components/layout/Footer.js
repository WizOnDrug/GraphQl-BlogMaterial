import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
           <Typography component="p" variant="p" bgcolor="#f7f7f7" color="rgba(104, 142, 250, 0.8)" padding="10px" textAlign="center" mt={10} sx={{
            backgroundColor:"radial-gradient(farthest-side ellipse at 10% 0, #333867 20%, #17193B)"
           }} >
               WiZONDruG | GraphQL BloG
           </Typography> 
        </footer>
    );
};

export default Footer;