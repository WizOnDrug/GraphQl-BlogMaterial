import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Grid, Avatar, Typography, Divider, dividerClasses } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from './../shared/Loader';

const Authors = () => {

    const {loading,data, errors} = useQuery(GET_AUTHORS_INFO);

    if(loading) return <Loader/>;
    if(errors) return <h4>Errors ...</h4>;

    return (

            <div style={{backgroundColor:"rgba(104, 142, 250, 0.1)",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius: 10}}>
        <Grid container  >
            {
                data.authors.map((author,index)=>( 
                    <React.Fragment key={author.id}>
                <Grid item xs={12} padding={2} sx={{direction:"ltr"}} >
                    <Link to={`/authors/${author.slug}`} style={{display:"flex", alignItems:"center", textDecoration:"none"}}>
                    <Avatar src={author.avatar.url} sx={{marginLeft:2}}/>
                    <Typography component="p" variant="p"  sx={{marginLeft:"10px",color:"rgba(104, 142, 250, 0.8)"}}>
                        {author.name}
                    </Typography>
                    </Link>
                </Grid>
                {
                    index !== data.authors.length - 1 && (
                <Grid item xs={12}>
                    <Divider variant="middle" color="gray"  />
                </Grid>
                    )
                }
                </React.Fragment>
                ))
            }

        </Grid>
        </div>
    );
};

export default Authors;