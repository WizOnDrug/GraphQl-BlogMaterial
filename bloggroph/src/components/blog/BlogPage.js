import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BLOG_INFO } from '../../graphql/queries';
import Loader from '../shared/Loader';
import {Container, Grid, Typography, Avatar} from '@mui/material';
import { ArrowBackRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
import  sanitizeHtml from 'sanitize-html';
import CommentForm from '../comment/CommentForm';
import Comments from './../comment/Comments';

const BlogPage = () => {

    const {slug} = useParams();
    const navigate = useNavigate();
    const {loading, data, errors} = useQuery(GET_BLOG_INFO,{
        variables:{slug}
    })

    if(loading) return <Loader/>
    if(errors) return <h4>Errors ...</h4>
    console.log(data);
    return (
        <Container maxWidth="lg" sx={{direction:"rtl"}}>
            <Grid container color="white" sx={{fontFamily:"" , borderRadius:2 }}>
                <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant="h4" color="rgba(104, 142, 250, 0.8)" fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackRounded onClick={()=> navigate(-1)}/>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} alt={data.post.slug} widt="100%" style={{borderRadius:15}}/>
                </Grid>
                <Grid item xs={12} mt={7} display="flex" alignItems="center">
                    <Avatar src={data.post.author.avatar.url} sx={{width:80, height:80, marginLeft:2}} />
                    <Box component="div">
                        <Typography component="p" variant="h5" fontWeight={700}>
                            {data.post.author.name}
                        </Typography>
                        <Typography component="p" variant="p"  sx={{ color:"rgba(104, 142, 250, 0.8)"}}>
                            {data.post.author.field}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={5} sx={{border:"1px dashed white" , borderRadius:2 ,padding:2 , boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;