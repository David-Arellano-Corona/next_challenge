import {useState, useEffect} from 'react';
import axios from 'axios';
import { Drawer } from '@material-ui/core';
import CustomTable from '../components/table';

import Filter from '../components/filter';

import Create from '../components/create';

const url = "http://localhost:3001/products"

export default function Store(props){
    const { products, total, alert, setAlert, messageAlert, setMessageAlert } = props;
    let [page, setPage] = useState(1);
    let [newProducts, setNewProducts] = useState(products);
    let [newTotal, setNewTotal] = useState(total);
    let [category, setCategory] = useState("");
    let [productName, setProductName] = useState("");
    let [drawer, setDrawer] = useState(false);
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [precio, setPrecio] = useState(0);
    let [categoria, setCategoria] = useState("")
    let [id, setId] = useState("")
    let [buttonType, setButtonType] = useState("");


    const fetch = async () => {
        try{
         const {data, status} = await axios.get(url,{params:{Page:page, Limit:5, NameProduct:productName,Category:category}})
         
         if(status == 200) {
             setNewProducts(data.products);
             setNewTotal(data.pages)
          }
        }catch(err){
            console.log(err);
        }    
    }
    useEffect(()=>{ fetch() },[category, productName, page])

    const onLeft = () => {
        page = page - 1;
        page = page < 1 ? 1 : page;
        
        setPage(page)
        
    }

    const onRigth = () => {
        page = page + 1
        page = page > newTotal ? newTotal : page
        
        setPage(page)
        
    }
   
    const onCategory =  async (value) => {
        
        setCategory(value)
        await fetch()
    }
    const onProduct = async (value) => {
        setProductName(value)
        await fetch()
    }

    const clearInputs = () =>{
        setName("");
        setDescription("");
        setPrecio(0);
        setCategoria("");
        setId("");
    }

    const onCreate = async () => {
        try{
            const newProduct = await axios.post(url,{
                NameProduct:name,
                Category:categoria,
                Description:description,
                ProductQuantity:parseInt(precio)
            })
            setDrawer(false)
            clearInputs();
            onAlert("Producto Creado","success")
        }catch(err){
            onAlert("Ocurrió un error, inténtalo de nuevo más tarde", "error")
            console.log(err);
        }
    }

    const onUpdate = async () => {
        try{
            const newProduct = await axios.put(url,{
                NameProduct:name,
                Category:categoria,
                Description:description,
                ProductQuantity:parseInt(precio),
                idProduct:id
            })
            fetch()
            setDrawer(false)
            clearInputs();
            onAlert("Producto Actualizado","success")
        }catch(err){
            onAlert("Ocurrió un error, inténtalo de nuevo más tarde", "error")
            console.log(err);
        }
    }

    const onDrawer = (type,id) => {
        setDrawer(!drawer);
        setButtonType(type);
        if(type=="update"){
            
            const product = newProducts.find( e => e.idProduct == id )
            if(product){
                setName(product.NameProduct);
                setDescription(product.Description);
                setPrecio(product.ProductQuantity)
                setCategoria(product.Category);
                setId(product.idProduct)
            }
        } 
        
    }

    const onDelete = async (id) => {
        try{
            const product = await axios.delete(url,{params:
                {idProduct:id}
            })
            fetch()
            setDrawer(false)
            onAlert("Producto Eliminado","success")
        }catch(err){
            onAlert("Ocurrió un error, inténtalo de nuevo más tarde", "error")
            console.log(err);
        }
    }

    const onAlert = (message,type) =>{
        setAlert(false);
        setMessageAlert({message,type});
        setAlert(true)
    }

    return(
        <div >
            <Filter setCategory={onCategory} setProductName={onProduct}  onDrawer={onDrawer} />
            <CustomTable products={newProducts} page ={page} onRigth={onRigth} onDrawer={onDrawer} onDelete={onDelete} onLeft={onLeft} />
            <Drawer anchor="right" open={drawer}  onClose={onDrawer} >
                <Create
                name={name} setName={setName}
                description={description} setDescription={setDescription}
                precio={precio} setPrecio = {setPrecio}
                categoria={categoria} setCategoria={setCategoria}
                onCreate = {onCreate}
                onUpdate ={onUpdate}
                buttonType={buttonType}
                /> 
            </Drawer>    
            
        </div>
    )
}

export async function getStaticProps(props){
    
    let products = [];
    let total = 0;
    try{
        const {data, status} = await axios.get(`${url}?NameProduct=&Category=&Limit=5&Page=1`);
        
        if(status == 200) {
            products = data.products
            total = data.pages
        }
    }catch(err){
        console.log(err);
    }
    
    return{
        props:{
            products,
            total
        }
    }
}