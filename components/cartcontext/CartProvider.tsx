"use client";

import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CartContextProvider=createContext();


export default function  CartContext({children}){
const [cartItems,setCartItems]=useState([]);

useEffect(()=>{
const savedItems = localStorage.getItem("cartItem");
if(savedItems){
   setCartItems(JSON.parse(savedItems))
}

},[])



useEffect(()=>{
localStorage.setItem("cartItem",JSON.stringify(cartItems))
},[cartItems])



// add to cart//
function addTocart(product: {
   
}){
   console.log(product)
setCartItems((p)=>{
const exsist= p.find((val)=>val.id===product.id);
if(exsist){
 if(exsist.qnty >= product.stock)return p ;

return p.map((val)=>val.id===product.id ? {...val,qnty:val.qnty+1}:val)
}
if(product.stock===0)return p;

return [...p,{...product,qnty:1}]

})


}
// ************************
function increaseItems(id:number,stock:number){
setCartItems((p)=>p.map((val)=>{
   if(val.id === id){
      if(val.qnty>=stock) return val;
      return {...val ,qnty:val.qnty+1}
   }
   return val;
}))
}
// *****************************//
function decreaseItems(id){
setCartItems((p)=>p.map((val)=>val.id===id ? {...val,qnty:val.qnty-1}:val).filter((val)=>val.qnty>0))
}

// remove items//
function removeItems(id){
setCartItems((p)=>p.filter((val)=>val.id!==id));
}

// ***//
function cartClear(){
   setCartItems([]);
   localStorage.clear()
}

// price//
 const totalPrice = cartItems.reduce((sum,val)=>sum+ (val.price*10 *val.qnty),0);
   const gst =Math.floor(totalPrice * 0.18);
   const shippingcharges=80;

// ***********************//

return (
<CartContextProvider.Provider value={{cartItems,addTocart,increaseItems,decreaseItems,removeItems,cartClear,totalPrice,gst,shippingcharges}}>
    {children}
</CartContextProvider.Provider>

)

}

export const useCartContext=()=>useContext(CartContextProvider)