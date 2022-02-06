import * as React from 'react';
import { useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import getCategorie from '../api/getCategorie'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({values,change,name}) {
    // categorie stock les donner des fecth de get categorie
    const[categories, setCategories] = React.useState([])
    // ce state stock la valeur de mon input checkbox (les id des categorie)
    const [selectedCategorie, setSelectedCategorie] = React.useState([])

    useEffect(() => {
        fetchCategories()
      }, [])
    //   function qui recup la function qui get les categorie
      const fetchCategories = async () => {
          const categories = await getCategorie()
          setCategories(categories)
        //   console.log("My categories", categories)
      }
    // function qui recup la valeur de l'input checkbox et le met dans le state
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setSelectedCategorie(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    // console.log("state qui stock l'id",selectedCategorie);
    // console.log("mes props=>",values,change);
  return (
    <div>
      <FormControl sx={{ mx: 2, width: 223, mt:2 }}>
        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          name={name}
          multiple
          value={values}
          onChange={change}
          input={<OutlinedInput label="categories" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.map((categorie) => (
            <MenuItem key={categorie._id} value={categorie._id}>
              <Checkbox checked={selectedCategorie.includes(categorie._id)} />
              <ListItemText primary={categorie.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}