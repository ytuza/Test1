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
import img1 from '../../../image360/img1.gif';
import img2 from '../../../image360/img2.gif';
import img3 from '../../../image360/img3.gif';
import img4 from '../../../image360/img4.gif';
import img5 from '../../../image360/img5.gif';
import img6 from '../../../image360/img6.gif';
import img7 from '../../../image360/img7.gif';
import img8 from '../../../image360/img8.gif';
import img9 from '../../../image360/img9.gif';
import img10 from '../../../image360/img10.gif';
import img11 from '../../../image360/img11.gif';


const arr360 = [
	img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

export const ProductosList = () => {

	//recupero del context los productos
	const value = useContext(DataContext)
	const [productos] = value.productos;

	//variable que muestra el filtro
	const [filtro, setFiltro] = React.useState('');

	//items que voy a renderizar
	const [items, setItems] = React.useState([]);

	//variable que me indica si abro o no el modal de 360 (-)
	const [open360, setOpen360] = React.useState(false);

	//variable que indica el indice q estoy haciendo click
	const [currentIndex, setCurrentIndex] = React.useState(0);

	//funcion cuando hago clik en 360
	const handle360ClickOpen = (id) => {
		setOpen360(true);
		setCurrentIndex(id);
	};
	
	// func cuando cierro el modal 360
	const handleClose360 = () => {
		setOpen360(false);
	};

	//funcion se llama cuando cambio el formControl
	const handleChange = (event) => {
		switch (event.target.value) {
			case 0:
				setFiltro('');
				setItems(productos);
				break;
			case 1:
				setFiltro(event.target.value);
				setItems(productos.filter(x => x.id < 6));
				break;
			case 2:
				setFiltro(event.target.value);
				setItems(productos.filter(x => x.id > 5));
				break;
			default:
				break;
		}
	};

	
	//edita items al inicializar la ventana 
	React.useEffect(() => {
		setItems(productos);
	}, [productos])

    return (
      <Box sx={{ flexGrow: 1, padding: '20px' , paddingTop: '200px'}}>
		  {console.log('items', items)}
		<FormControl sx={{ width: '200px', background:'#ffffff'}} >
			<InputLabel id="demo-simple-select-label">Sexo</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={filtro}
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
					handle360ClickOpen={() => handle360ClickOpen(producto.id-1)}
				/>
			</Grid>
			))
		}
      </Grid>
	  <Dialog
        open={open360}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose360}
        aria-describedby="alert-dialog-slide-description"
		maxWidth="md"
		fullWidth
      >
		  {console.log(currentIndex, items)}
        <DialogTitle>{productos[currentIndex]?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{display: 'flex', justifyContent: 'space-around'}}>
			<img width="500" src={arr360[currentIndex]} alt={"loading .."}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose360}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
    )
}
