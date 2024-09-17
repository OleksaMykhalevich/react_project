export const productsArray = [
    {
        id: 1,
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: 512,
        type: 'phone',
        price: 2000,
        image: '/images/iphone-black.jpg',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: 256,
        type: 'phone',
        price: 1850,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 3,
        name: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        capacity: 128,
        type: 'phone',
        price: 1600,
        image: '/images/iphone-silver.jpg',
    },
    {
        id: 4,
        name: 'iPhone Xs',
        description: 'This is iPhone Xs',
        capacity: 256,
        type: 'phone',
        price: 1400,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 5,
        name: 'iPhone Xr',
        description: 'This is iPhone Xr',
        capacity: 256,
        type: 'phone',
        price: 1200,
        image: '/images/iphone.jpg',
    },
    {
        id: 6,
        name: 'iPhone 8',
        description: 'This is iPhone 8',
        capacity: 256,
        type: 'phone',
        price: 1000,
        image: '/images/iphone-black.jpg',
    },
]

export const getProductsObject = (array) => {
    return array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
}
