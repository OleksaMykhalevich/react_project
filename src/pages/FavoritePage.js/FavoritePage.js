import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { LikedProductList } from 'components/Products/LikedProductList'

export const FavoriteItems = () => {
    const favoriteReducer = useSelector((state) => state.favoriteReducer)
    return (
        <>
            <h1>Favorite Items</h1>
            <Grid container spacing={3}>
                <LikedProductList favoriteReducer={favoriteReducer} />
            </Grid>
        </>
    )
}
