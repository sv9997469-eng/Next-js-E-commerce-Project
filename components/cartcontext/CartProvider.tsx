"use client";

import { useContext, useState } from "react";
import { createContext } from "react";

const CartContextProvider=createContext();


export default function  CartContext({children}){
const [cartItems,setCartItems]=useState([]);

// add to cart//

function increaseItems(val){
const exsist=cartItems.find((val)=>val.id===id);
if(exsist){
   return setCartItems((p)=>p.map((val)=>val.id===val.id ? {...val,qnty:val.qnty+1}:val))
}
return setCartItems([...cart,{...val,qnty:1}]);
}
// decrease//

function decreaseItems(val){
const exsist=cartItems.find((val)=>val.id===val.id);
if(exsist){
   return setCartItems((p)=>p.map((val)=>val.id===val.id ? {...val,qnty:val.qnty-1}).filter((val)=>val.qnty>0))
}

}


// remove items//
function removeItems(id){
setCartItems((p)=>p.filter((val)=>val.id!==id))
}


<CartContextProvider.Provider value={{cartItems,increaseItems,decreaseItems,removeItems}}>
    {children}
</CartContextProvider.Provider>



}

export const useCartContext=()=>useContext(CartContextProvider)