import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'components/Products/productsArray'
import { useSelector } from 'react-redux'

export const CartTotal = ({ productsInCart, productsObject }) => {
    const productsArray = useSelector((state) => state.products)
    productsObject = getProductsObject(productsArray)
    if (productsArray === 0) {
        return null
    } else {
        return (
            <>
                Total:{' '}
                {keys(productsInCart).reduce((total, productId) => {
                    return (
                        total +
                        productsObject[productId].price *
                            productsInCart[productId]
                    )
                }, 0)}
                $
            </>
        )
    }
}
