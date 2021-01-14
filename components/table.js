import { 
    TableContainer, Table, TableBody, TableRow, TableCell, 
    Paper, TableHead, TablePagination, TableFooter,IconButton } from '@material-ui/core';   
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, useTheme, makeStyles } from '@material-ui/core/styles';
import styles from './Table.module.css';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#CCCCCC",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


export default function CustomTable(props){
    const { products, page, onRigth, onLeft,onDrawer, onDelete } = props;
    
    return(
        <TableContainer component={Paper}  >
            <Table aria-label="customized table"  className={styles.customTable} >
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Nombre del producto</StyledTableCell>
                        <StyledTableCell >Categoría</StyledTableCell>
                        <StyledTableCell >Precio</StyledTableCell>
                        <StyledTableCell >Fecha de registro</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((product, i) => (
                            <TableRow key={i} >
                                <TableCell>{product.NameProduct.substring(0,20)+"..."}</TableCell>
                                <TableCell>{product.Category}</TableCell>
                                <TableCell>{product.ProductQuantity}</TableCell>
                                <TableCell>{product.Timestamp.split("T")[0]}</TableCell>
                                <TableCell>
                                    <EditIcon color="primary" onClick={()=> onDrawer("update",product.idProduct)}  className={styles.icono} />
                                    <DeleteIcon color="secondary" onClick={() => onDelete(product.idProduct) } className={styles.icono} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    <TableRow   >
                        <TableCell colSpan={4} ></TableCell>
                        <KeyboardArrowLeft  onClick={onLeft} className={styles.customPagination}/>
                        <span className={styles.page}>{page}</span>
                        <KeyboardArrowRight onClick={onRigth} className={styles.customPagination} />
                    </TableRow>
                </TableBody>
                
                    
            </Table>
        </TableContainer>
    )
}