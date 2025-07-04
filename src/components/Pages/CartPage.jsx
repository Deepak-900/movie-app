import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';


const CartPage = () => {
    let dispatch = useDispatch();

    let cart_items = useSelector(store => store.cartStore.cart_items)
    // console.log(cart_items)

    const addDays = (item) => e => {
        e.preventDefault()
        let newDays = item.no_of_days + 1
        if (newDays > 30) {
            Swal.fire('Warning!', 'Cannot achieve 30 days.', 'warning')
        } else {
            let new_item = { ...item, no_of_days: newDays, price: Number(item.price + 10) }
            // console.log(new_item)
            dispatch({ type: "UPDATE_CART", payload: new_item })
        }
    }
    const reduceDays = (item) => e => {
        e.preventDefault()
        let newDays = item.no_of_days - 1
        if (newDays <= 0) {
            Swal.fire({
                title: "warning",
                text: 'Cannot reduce Further. Remove Instead ???',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'NOOO',
                confirmButtonText: 'YESS',
                cancelButtonColor: 'red',
                confirmButtonColor: 'green'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                        // Swal.fire({
                        //     title: ''
                        // })
                    }
                })
        } else {
            let new_item = { ...item, no_of_days: newDays, price: Number(item.price - 10) }
            // console.log(new_item)
            dispatch({ type: "UPDATE_CART", payload: new_item })
        }
    }

    return (
        <>
            <h1 className='mt-5 mb-3 text-center text-decoration-underline'> Cart Items</h1>

            {
                cart_items.length > 0 ?
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
                                        <td>
                                            <div className='btn-group flex justify-content-evenly'>
                                                <button className='btn btn-danger' onClick={reduceDays(cart_item)}>-</button>
                                                <input readOnly value={cart_item.no_of_days} className='text-center w-50 outline-0 border-0' />
                                                <button className='btn btn-success' onClick={addDays(cart_item)}>+</button>
                                            </div>

                                        </td>
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
                    </table> :
                    <h5 className='mt-5 mb-3 text-center '> No items in cart.</h5>

            }

        </>
    )
}

export default CartPage