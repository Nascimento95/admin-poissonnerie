import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik'
import modifProduct from '../api/ModifProduct';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({idProduit}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
        name:"",
        image:"",
        characteristic:"",
        kiloPrice: "",
        pricePerPiece: "",
        netWeight: "",
        conditioning:"",
        fishingArea :"",
        // categories:"",
        // available:false,
    },
    validateOnChange:false,
    onSubmit: values => {
        // PostProduct(values)
        modifProduct(values,idProduit)
        formik.resetForm();
    },
  });
  console.log(formik.values,"props id =>", idProduit);
  return (
    <div>
      <Fab color="primary" aria-label="edit">
                <EditIcon onClick={handleOpen}></EditIcon>
      </Fab>
      {/* <Button onClick={handleOpen}>modifier le produit</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={formik.handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mofifier le produit

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid item sm={12} spacing={5} container>
              <Grid item sm={6}>
                <TextField
                  name="name"
                  type="text" 
                  label="name" 
                  variant="standard" 
                  onChange={formik.handleChange} 
                  value={formik.values.name} />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="image"
                  type="text" 
                  label="image url" 
                  variant="standard" 
                  onChange={formik.handleChange} 
                  value={formik.values.image}/>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="characteristic"
                  type="text" 
                  label="characteristic" 
                  variant="standard" 
                  onChange={formik.handleChange} 
                  value={formik.values.characteristic}/>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="kiloPrice"
                  type="number" 
                  label="kiloPrice"
                  variant="standard" 
                  onChange={formik.handleChange} 
                  value={formik.values.kiloPrice}/>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="pricePerPiece"
                  type="number" 
                  label="pricePerPiece" 
                  variant="standard" 
                  onChange={formik.handleChange} 
                  value={formik.values.pricePerPiece}/>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="netWeight"
                  type="number" 
                  label="netWeight" 
                  variant="standard" 
                  onChange={formik.handleChange}
                  value={formik.values.netWeight} />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="fishingArea"
                  type="text" 
                  label="fishingArea" 
                  variant="standard" 
                  onChange={formik.handleChange}
                  value={formik.values.fishingArea} />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="conditioning"
                  type="text" 
                  label="conditioning" 
                  variant="standard" 
                  onChange={formik.handleChange}
                  value={formik.values.conditioning} />
              </Grid>
              <Grid item sm={6}>
                {/* <TextField 
                  name="available"
                  type="checkbox" 
                  label="available" 
                  variant="standard" 
                  onChange={formik.handleChange}
                  value={formik.values.available} /> */}
              </Grid>
              <Grid item sm={6}>
                <Button variant="text" type="submit">valider</Button>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}