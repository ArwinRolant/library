import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




const Home = () => {
    
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get(' https://freetestapi.com/api/v1/books').then((res)=>{
     
      setRows(res.data)
    })
    },[])
    return (
    <div>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
                {rows.map((row)=>(
        <Grid item xs={3}>

        <Card key={row.title} sx={{ maxWidth: 340 }}>
        
        <CardMedia
            sx={{ height: 200 }}
            
            image={row.cover_image}
            title={row.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Name : {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Author : {row.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Genre : {row.genre}
            </Typography>
        </CardContent>
        </Card>

        </Grid>
        ))}
        </Grid>
        
        </Box>

            </div>
        )
}

export default Home