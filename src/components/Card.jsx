import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
import { styled } from 'styled-components';

export default function MediaCard({ name, image, poid, prixKilo, prixPiece, width, height}) {
    
    return (
    
        <Card sx={{maxWidth:{width},ml:2, mb:2,}}>
            <CardMedia
                component="img"
                height={`${height}`}
                image={`${image}`}
                alt="green iguana"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {/* <p>Description</p> */}
                <p><span style={{fontWeight: "bold"}}>Poids :</span> {poid}g</p>
                <p><span style={{fontWeight: "bold"}}>Prix au kilo :</span> {prixKilo}0€ kg</p>
                <p><span style={{fontWeight: "bold"}}>Prix pièce :</span> {prixPiece}€ </p>
                </Typography>
            </CardContent>
            <CardActions>
            {/* <Fab color="primary" aria-label="edit">
                <EditIcon />
            </Fab> */}
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
);
}