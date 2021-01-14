import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from './Filter.module.css'
export default function Filter(props){
    const {setProductName,setCategory,onDrawer} = props;
    return(
        <div className={styles.filterContent} >
            <TextField  className={styles.filterItem}  
            onChange={ (e) => setProductName(e.target.value) }
            label="Nombre del producto" variant="outlined" />
            <TextField className={styles.filterItem}  
            onChange={(e) => setCategory(e.target.value)}
            label="Categoría" variant="outlined" />
            <Button color="primary" variant="contained"  onClick={()=>onDrawer("create","")}  startIcon={<AddIcon/>} >Agregar</Button>
        </div>
    )
}