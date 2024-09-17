import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Button, Card, CardContent, Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ProductsListItem.css'

export const LikedItem = ({ product, productsInCart }) => {
    const isLiked = useSelector((state) => state.productsLikeState[product.id])
    const dispatch = useDispatch()

    function removeLike(id) {
        dispatch({
            type: 'DISLIKE',
            id,
        })
    }
    function addLike(id) {
        dispatch({
            type: 'LIKE',
            id,
        })
    }

    function addProdutLiked(id, count) {
        dispatch({
            type: 'ADD_PRODUCT_TO_FAVORITE',
            id,
            count,
        })
    }
    function removeProductFromLiked(id) {
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_FAVORITE',
            id,
        })
    }

    return (
        <Grid className="itemPosition" item xs={12} sm={3}>
            <Card className="itemPosition">
                <div>
                    <img alt="/" src={product.image} />
                </div>
                <CardContent className="itemPosition">
                    <div>{product.name}</div>
                    <div>Price for one items: {product.price}</div>

                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? removeLike(product.id) &
                                  removeProductFromLiked(product.id)
                                : addLike(product.id) &
                                  addProdutLiked(product.id, product.count)
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
