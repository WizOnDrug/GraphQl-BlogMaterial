import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENTS } from '../../graphql/queries';
import { Grid, Typography, Avatar, Box } from '@mui/material';

const Comments = ({slug}) => {
    const {loading, data, errors} = useQuery(GET_POST_COMMENTS,{
        variables:{slug}
    })
    if(loading) return null;
    return (
        <Grid container sx={{backgroundColor:"rgba(104, 142, 250, 0.1)",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8 
        }}>
            <Grid item xs={12} >
                <Typography component="p" variant="h6" fontWeight={700} color="white" sx={{padding:2}}>کامنت ها</Typography>
                {data.comments.map(comment=>(
                    <Grid item xs={12} key={comment.id} m={2} p={2} border="1px silver solid" borderRadius={2}>
                        <Box component="div" display="flex" alignItems="center" mb={3}>
                            <Avatar>{comment.name[0]}</Avatar>
                            <Typography component="span" variant="p" fontWeight={700} mr={2}>{comment.name}</Typography>
                        </Box>
                        <Typography component="p" variant="p">{comment.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;