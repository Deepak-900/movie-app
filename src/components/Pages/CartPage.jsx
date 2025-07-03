import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';


const CartPage = () => {
    let dispatch = useDispatch();

    let cart_items = useSelector(store => store.cartStore.cart_items)
    return (
        <>
            <h1 className='mt-5 mb-3 text-center text-decoration-underline'> Cart Items</h1>

            <table className='table w-75 mx-auto table-hover table-striped text-center'>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th>
                        <th colSpan={2}>Movie</th>
                        <th>Release Year</th>
                        <th>Genre</th>
                        <th>No. of Days</th>
                        <th>Rent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart_items.length > 0 &&
                        cart_items.map((cart_item, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img src={cart_item.image} alt={cart_item.title} style={{ height: "100px" }} /></td>
                                <td><h5>{cart_item.title}</h5></td>
                                <td><h5>{cart_item.releaseDate}</h5></td>
                                <td><h5>{cart_item.genres}</h5></td>
                                <td><h5>{cart_item.no_of_days}</h5></td>
                                <td><h5>{cart_item.price}</h5></td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => {
                                        dispatch({ type: "REMOVE_FROM_CART", payload: cart_item.id })
                                        Swal.fire('Attention!', 'Your movie removed from cart.', 'info')
                                    }}>Remove</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={() => {
                                dispatch({ type: "CLEAR_CART" })
                                Swal.fire('Attention!', 'Your movie removed from cart.', 'info')
                            }}>Clear Cart</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default CartPage