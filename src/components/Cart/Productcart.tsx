import React from 'react';

const product = {
    image: 'https://images.unsplash.com/photo-1622836829480-7f7f7b7f6f7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Product 1',
    price: 23
};

function ProductCart() {
    const { image, title, price } = product;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full bg-red-500 flex justify-between px-4 py-2'>
                <div className='flex-1'>
                    <p>Product</p>
                </div>
                <div className='flex-1'>
                    <p>Title</p>
                </div>
                <div className='flex-1'>
                    <p>Price</p>
                </div>
                <div className='flex-1'>
                    <p>Quantity</p>
                </div>
                <div className='flex-1'>
                    <p>Total</p>
                </div>
                <div className='flex-1'>
                    <p>Remove</p>
                </div>
            </div>

            <div className='w-full flex justify-between items-center px-4 py-2'>
                <div className='flex-1'>
                    <img src={image} width="70px" alt="" />
                </div>
                <div className='flex-1'>
                    <p>{title}</p>
                </div>
                <div className='flex-1'>
                    <p>${price}</p>
                </div>
                <div className='flex-1'>
                    <p>1</p>
                </div>
                <div className='flex-1'>
                    <p>${price}</p>
                </div>
                <div className='flex-1'>
                    <p>X</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
