import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        maxWidth="200"
        image={image}
        alt="Paella dish"
      />
      <CardContent sx={{height: '150px'}}>
        <Typography gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography  gutterBottom variant="h5" component="div">
          $ {price}
        </Typography>
        <Stack spacing={2} direction="row">
        <Button variant="text" onClick={() => addCarrito(id)}>Añadir al carrito</Button>
        <Button variant="contained" href={`/producto/${id}`}>Vista</Button>
      </Stack>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  
  );
};
