import React, {createContext,useState} from "react";
import  headphone from "../assets/headphone.jpg"
import iphone from "../assets/iphone.jpg"
import jewellery from "../assets/jewellery.jpg"
import perfumes from "../assets/perfumes.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
import shirt from "../assets/shirt.jpg"
import makeupbrush from "../assets/makeupbrush.jpg"
import jenes from "../assets/jenes.jpg"
import bag from "../assets/bag.jpg"
import laptop from "../assets/laptop.jpg"
import LEDTV from "../assets/LEDTV.jpg"
import mask from "../assets/mask.jpg"
import shampoo from "../assets/shampoo.jpg"
import Sweater from "../assets/Sweater.jpg"
import waterbattle from "../assets/waterbattle.jpg"
import Camera from "../assets/Camera.jpg"
import teacup from "../assets/teacup.jpg"
import skirt from "../assets/skirt.jpg"
import hairdryer from "../assets/hairdryer.jpg"

export const ProductsContext= createContext();
const ProductsContrxtProvider=(props)=>{
    const[products]=useState([
        {id:1,name:'Headphone',price:300,image:headphone,status:'hot'},
        {id:2,name:'Iphone',price:40000,image:iphone,status:'new'},
        {id:3,name:'Jewellery',price:2500,image:jewellery,status:'hot'},
        {id:4,name:'Perfumes',price:299,image:perfumes,status:'new'},
        {id:5,name:'Shoes',price:380,image:shoes,status:'hot'},
        {id:6,name:'Shirt',price:399,image:shirt,status:'cool'},
        {id:7,name:'Makeup Brush',price:250,image:makeupbrush,status:'new'},
        {id:8,name:'Watch',price:320,image:watch,status:'new'},
        {id:9,name:'Jenes',price:450,image:jenes,status:'cool'},
        {id:10,name:'Camera',price:450,image:Camera,status:'hot'},
        {id:11,name:'Bag',price:450,image:bag,status:'new'},
        {id:12,name:'LED TV',price:45000,image:LEDTV,status:'cool'},
        {id:13,name:'Mask',price:150,image:mask,status:'hot'},
        {id:14,name:'Shampoo',price:250,image:shampoo,status:'cool'},
        {id:15,name:'Sweater',price:650,image:Sweater,status:'new'},
        {id:16,name:'Water Battle',price:150,image:waterbattle,status:'hot'},
        {id:17,name:'Laptop',price:45999,image:laptop,status:'cool'},
       {id:18,name:'Teacups',price:450,image:teacup,status:'new'},
        {id:19,name:'Skirt',price:450,image:skirt,status:'cool'},
        {id:20,name:'HairDryer',price:450,image:hairdryer,status:'hot'}
        ]);
    return(
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}

        </ProductsContext.Provider>
    )

    
}
export default ProductsContrxtProvider;
