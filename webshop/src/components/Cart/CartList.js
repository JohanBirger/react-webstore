import React from 'react'
import CartItem from './CartItem';
import Cart from './Cart';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default function CartList({value}) {
    const {cart} = value
    console.log(value, cart);
    
    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}
                />;
            })}
            
            
        </div>
    )
}
