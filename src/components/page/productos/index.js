import React, {useContext} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
      <Box sx={{ flexGrow: 1, padding: '20px' , paddingTop: '200px'}}>
      <Grid container spacing={8} >
          {
							productos.map(producto =>(
                <Grid item xs={12} sm={6} md={4}>
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
                </Grid>
							))
						}
      </Grid>
    </Box>
    )
}
