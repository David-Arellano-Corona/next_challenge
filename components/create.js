import { TextField, Select, MenuItem, Button, InputLabel, FormControl } from '@material-ui/core';
import style from './Create.module.css';
export default function Create(props){
    
    const {name,setName,description,setDescription,precio,setPrecio,categoria,setCategoria,
        onCreate,buttonType,onUpdate} = props;
    return(
        <div className={style.createContent} >
            <TextField className={style.creteItem} multiline rows={4}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nombre del producto" variant="outlined" />

            <TextField  className={style.creteItem} multiline rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Descripción" variant="outlined" />

            <TextField  type="number" className={style.creteItem}
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            label="Precio" variant="outlined" />
            <FormControl>
            <InputLabel id="catego" >Cetegoría</InputLabel>
            <Select label="Categoría" labelId="catego"  value={categoria} onChange={(e) => props.setCategoria(e.target.value)}  className={style.creteItem} >
                <MenuItem value="Bebidas">Bebidas</MenuItem>
                <MenuItem value="Limpieza" >Limpieza</MenuItem>
                <MenuItem value="Botanas" >Botanas</MenuItem>
                <MenuItem value="Cremeria" >Cremeria</MenuItem>
            </Select>
            </FormControl>
            {buttonType == "create" &&<Button className={style.creteItem}  onClick={onCreate} color="primary" variant="contained"  >Registrar</Button>}
            {buttonType == "update" &&<Button className={style.creteItem}  onClick={onUpdate} color="primary" variant="contained"  >Actualizar</Button>}
        </div>
    )
}