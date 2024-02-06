import React from 'react'

function Productcart({ product }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[90%] bg-red-500 flex '>
                    <div className='w-[5rem]'>
                        <p >Products</p>
                    </div>
                    <div className='w-[10rem]'>
                        <p>Title</p>
                    </div>
                    <div className='w-[5rem]'>
                        <p>Price</p>
                    </div>
                    <div className='w-[5rem]'>
                        <p>Quantity</p>
                    </div>
                    <div className='w-[5rem]'>
                        <p>Total</p>
                    </div>
                    <div className='w-[5rem]'>
                        <p>Remove</p>
                    </div>
                </div>

                <div className='w-[90%] flex'>
                    <div className='w-[5rem]'>
                        <img src={product.image} width="70px" alt="" />
                    </div>
                    <div className='w-[10rem]'>
                        <p>
                        {product.title}
                        </p>
                    </div>

                    <div className='w-[5rem]'>
                        <p>
                        {product.price}
                        </p>
                    </div>

                    <div className='w-[5rem]'>
                        <p>1</p>
                    </div>

                    <div className='w-[5rem]'>
                        <p>$23</p>
                    </div>
                    <div className='w-[5rem]'>
                        <p>X</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Productcart