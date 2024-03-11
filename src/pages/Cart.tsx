import React from 'react'
import ProductCard from '../components/Main/ProductCard'
import Productcart from '../components/Cart/Productcart'
import cartStore from '../app/CartStore'

function Cart() {

  const { cart } = cartStore();

  return (
    <>
      <Productcart product={cart[0]}/>
    </>
  )
}

export default Cart