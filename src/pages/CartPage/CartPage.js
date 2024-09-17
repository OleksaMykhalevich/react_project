import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { CartProductListItemExtended } from 'components/Cart/CartProductsListItemExtended'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const CartPage = () => {
    const productsInCart = useSelector((state) => state.productsInCart)
    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">
                <p>Proceed to checkout</p>
            </Link>
        </>
    )
}
