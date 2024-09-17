import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'components/Products/productsArray'
import { CartProductListItem } from './CartProductsListItem'
import { useSelector } from 'react-redux'

export const CartProductList = ({
    productsInCart,
    productsObject,
    CartItem = CartProductListItem,
}) => {
    const productsArray = useSelector((state) => state.products)
    productsObject = getProductsObject(productsArray)

    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                    />
                ))}
            </>
        )
    }
}
