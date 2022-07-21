import React, {useContext} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import shoes from '../../../shoes360.gif'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;

	const [age, setAge] = React.useState('');
	const [items, setItems] = React.useState([]);

	const [open, setOpen] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handleClickOpen = (id) => {
		setOpen(true);
		setCurrentIndex(id);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		switch (event.target.value) {
			case 0:
				setAge('');
				setItems(productos);
				break;
			case 1:
				setAge(event.target.value);
				setItems(productos.filter(x => x.id > 5));
				break;
			case 2:
				setAge(event.target.value);
				setItems(productos.filter(x => x.id < 6));
				break;
			default:
				break;
		}
	};

	React.useEffect(() => {
		setItems(productos);
	}, [productos])

    return (
      <Box sx={{ flexGrow: 1, padding: '20px' , paddingTop: '200px'}}>
		  {console.log('productos', productos)}
		<FormControl sx={{ width: '200px'}} >
			<InputLabel id="demo-simple-select-label">Sexo</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={age}
				label="Sexo"
				onChange={handleChange}
			>
				<MenuItem sx={{color:'red'}} value={0}>Limpiar</MenuItem>
				<MenuItem value={1}>Hombre</MenuItem>
				<MenuItem value={2}>Mujer</MenuItem>
			</Select>
      	</FormControl>
		  <Divider sx={{paddingTop: '20px'}} />
      <Grid container spacing={8} sx={{paddingTop: '20px'}} >
          {
			items.map((producto, index) =>(
			<Grid item xs={12} sm={6} md={4}>
				<ProductoItem 
					key={producto.id}
					title={producto.title}
					image={producto.image}
					category={producto.category}
					price={producto.price}
					id={producto.id}
					handleClickOpen={() => handleClickOpen(index)}
				/>
			</Grid>
			))
		}
      </Grid>
	  <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
		maxWidth="md"
		fullWidth
      >
        <DialogTitle>{items[currentIndex]?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{display: 'flex', justifyContent: 'space-around'}}>
			<img width="500" src={items[currentIndex]?.image} alt={"loading .."}/>
          </DialogContentText>
		  <DialogContentText>
		  	Suela de goma sintética importada. El eje mide aproximadamente 0-6
			pulgadas desde el arco. La plataforma mide aproximadamente 1 pulgada. La
			apertura de la bota mide aproximadamente 6-12 pulgadas alrededor de los
			zapatos de ante inspirados en la corte con acolchado suave para una comodidad casual
		  </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
    )
}
