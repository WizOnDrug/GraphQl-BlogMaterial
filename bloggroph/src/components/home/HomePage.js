import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Authors from '../author/Authors';
import Blogs from './../blog/Blogs';

const HomePage = () => {
    return (
        <Container maxWidth="lg"sx={{direction:"rtl"}}>
            <Grid container spacing={2} padding={3} >
                <Grid item xs={12} md={3} mt={4}>
                    <Typography component="h3" variant="h5" fontWeight={700} mb={3} sx={{marginLeft:"10px",color:"rgba(255, 255, 250, 0.9)"}}>
                        نویسنده ها
                    </Typography>
                    <Authors/>
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography component="h3" variant="h5" fontWeight={700} mb={3} sx={{marginLeft:"10px",color:"rgba(255, 255, 250, 0.9)"}}>
                        مقالات
                    </Typography>
                    <Blogs/>
                </Grid>

            </Grid>
        </Container>
    );
};

export default HomePage;