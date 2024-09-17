import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'components/Products/productsArray'
import { LikedItem } from './LikedItem'
import { useSelector } from 'react-redux'

export const LikedProductList = ({ productsObject, favoriteReducer }) => {
    const productsArray = useSelector((state) => state.products)
    productsObject = getProductsObject(productsArray)

    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                {keys(favoriteReducer).map((productId) => (
                    <LikedItem
                        key={productId}
                        product={productsObject[productId]}
                    />
                ))}
            </>
        )
    }
}
