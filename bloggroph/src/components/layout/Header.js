import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <AppBar position="sticky" sx={{direction:"rtl",background:"radial-gradient(farthest-side ellipse at 10% 0, #333867 20%, #17193B)"}}>
           <Container maxWidth="lg" sx={{direction:"rtl",background:"radial-gradient(farthest-side ellipse at 10% 0, #333867 20%, #17193B)"}} >
              <Toolbar>
                 <Typography component="h1" variant="h5" fontWeight={700} flex={1}   >
                    <Link to="/" style={{textDecoration:"none", color:"#fff"}}> وبلاگ برنامه نویسی</Link>
                     </Typography>
                 <Link to="/" style={{color:"#fff"}}>
                   <BookIcon/>
                </Link>
               </Toolbar>
           </Container>
        </AppBar>
        </div>
    );
};

export default Header;