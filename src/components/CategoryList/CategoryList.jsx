import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


export default function MultipleSelect({ productos }) {
    let categorias = []
    {
        productos.map((category) => (
            categorias.push(category.category.name)
        ))
    }
    const result = categorias.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, [])

    const [categoria, setCategoria] = React.useState('');

    const navigate = useNavigate();

    const handleChange = (event) => {
        setCategoria(event.target.value);
        navigate("/category/" + event.target.value)

    };

    return (
        <Box sx={{ ml: 3, minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoria}
                    label="Categorias"
                    onChange={handleChange}
                >
                    {result.map((result) => (
                        <MenuItem value={result} key={result}>
                            {result}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}