import { Delete } from '@mui/icons-material'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Quantity } from 'components/Quantity/Quantity'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})
export const CartProductListItemExtended = ({ product, productCount }) => {
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
    function changeProductQuantity(id, count) {
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTITY',
            id,
            count,
        })
    }
    function removeProductFromCart(id) {
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
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

    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img
                        alt="/"
                        src={product.image}
                        className={classes.media}
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one items: {product.price}</div>
                    <div>Count: {productCount}</div>
                    <Quantity
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <Button variant="outlined">
                        <Delete
                            onClick={() => removeProductFromCart(product.id)}
                        />
                    </Button>
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
