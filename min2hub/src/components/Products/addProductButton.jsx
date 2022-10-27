//import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './addProduct.css'
//import { useAlert } from 'react-alert'


const AddProductButton = () => {
    //const alert = useAlert();
    /*  ---  MODAL FORM --- */
    
    //Product register fields
    const [product,setProduct] = useState({
        "name": '',
        "description": '',
        "image": ''
    });

    const {name, description, image} = product;

    //copies product data and changes the target of the onchange
    const onChange = e => {
        // Actualizamos para los diferentes tipos de datos recopilados
        setProduct({...product, [e.target.name]:e.target.value}); 
        //console.log(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(product)
        if(name === '' || description === '' || image === ''){
            //missing info
        }
        else{
            try {
                addToDB(product);
                close();
                resetForm();
                console.log('Producto añadido exitosamente')
                //alert.success('Producto añadido exitosamente');
            } catch (error) {
                console.log(error.response.data.msg)
                //alert.error(error.response.data.msg);
            }
            
        }
    }
    
    /*  ---  MODAL ACTIONS --- */
    let modal = document.querySelectorAll(".modal")[0];
    let modalContainer = document.querySelectorAll(".modal-container")[0];

    const open = e => {
        e.preventDefault();
        modalContainer.style.opacity = "1";
        modalContainer.style.visibility ="visible";
        modal.classList.toggle("modal-close");
    }
    const close = () => {
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        }, 600)//vamos a darle 1s para ejecutar la función
    }
    
    window.addEventListener("click", function(e){
        if(e.target === modalContainer){
            close();
        }
    })

    const resetForm = () => {
        setProduct({...product, 
            "name"  : '',
            "description" : '',
            "image": ''
        });
    }


    /*  ---  ADD TO DATABASE --- */

    const addToDB = (product) => {
        console.log(JSON.stringify(product));
        fetch("./addProduct", {
          method: 'POST',
          headers:{
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(product)
        }).then(console.log("Data inserted to products in min2Hub DB"));
    }

    return(
        <section>
            <a href="#" className='addProductButton' onClick={open}>.</a>
            <div className = "modal-container">
                <div className = "modal modal-close">
                    <a className = "close" onClick={close}>X</a>
                    <div className = "modal-text">
                        <h2 className='header'>Agregar nuevo producto</h2>
                        <form id = "formulario" onSubmit={onSubmit}>
                            <div className='grid-2'>
                                <div>
                                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                                    <input placeholder='Descripción' type='text' name = 'description' value={description} onChange = {onChange} required/>
                                    <input placeholder='URL Foto' type = 'text' name = 'image' value={image} onChange = {onChange} required/>
                                </div>
                            </div>
                            <input type="submit" value = "Agregar Producto" formTarget='_blank'/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default AddProductButton