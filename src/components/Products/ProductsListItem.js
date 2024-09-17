import { Button, Card, CardActions, CardContent } from '@mui/material'
import { Quantity } from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const ProductsListItem = ({
    name,
    description,
    capacity,
    type,
    price,
    image,
    id,
}) => {
    const isLiked = useSelector((state) => state.productsLikeState[id])
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
    function addProductToCart(id, count) {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            id,
            count,
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

    const [count, setCount] = useState(1)

    const onDecrement = () => {
        setCount(count - 1)
    }
    const onIncrement = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        onClick={() =>
                            isLiked
                                ? removeLike(id) & removeProductFromLiked(id)
                                : addLike(id) & addProdutLiked(id, count)
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>

                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div>Capacity: {capacity} Gb</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-price">{price} $</div>
                    <Quantity
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        count={count}
                    />
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count, price)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    capacity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description...',
    image: 'images/no-image.jpeg',
}
