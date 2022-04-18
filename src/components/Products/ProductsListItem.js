import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Quantity } from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { connect, Connect, useSelector } from 'react-redux'

const ProductsListItem = ({
    name,
    description,
    capacity,
    type,
    price,
    image,
    addProductToCart,
    id,
    isLiked = false,
    removeLike,
    addLike,
}) => {
    // const isLiked = useSelector((state) => state[id])
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
                        onClick={() => (isLiked ? removeLike(id) : addLike(id))}
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

const mapStateToProps = (state, { id }) => ({
    isLiked: state.productsLikeState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

// export default ProductsListItem
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListItem)
