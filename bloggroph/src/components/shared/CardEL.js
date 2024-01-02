import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CardEL = ({title, slug, coverPhoto, author}) => {
    return (
        <Card style={{backgroundColor:"rgba(104, 142, 250, 0.1)",boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 12px", borderRadius: 10}}>
            {
                author && 
            <CardHeader
            sx={{direction:"ltr"}}
                avatar={<Avatar src={author.avatar.url} sx={{marginLeft:1}}/>}
                title={<Typography component="p" variant="p" sx={{color:"rgba(255, 255, 300, 0.8)" , marginLeft:-1}}>
                           {author.name}
                        </Typography>}
            />
            }
            <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} sx={{borderRadius:2}}/>
            <CardContent>
                <Typography component="h3" variant="h6"  fontWeight={600} fontSize={18} sx={{color:"rgba(255, 255, 300, 0.8)"}}>{title}</Typography>
            </CardContent>
            <Divider variant="middle" sx={{margin: "10px" , marginTop:"2px"}} color="gray"/>
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{textDecoration:"none", width:"100%"}}>
                  <Button variant="outlined" size="small" sx={{width: "100%",marginBottom:1, borderRadius: 3,color:"rgba(255, 255, 300, 0.8)"}}>مطالعه مقاله</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default CardEL;