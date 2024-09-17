import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const setNavLinkClass = ({ isActive }) => (isActive ? 'nav-link' : 'menu-link')

export const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/">
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="products">
                    Products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/payment">
                    Payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/shipping">
                    Shipping
                </NavLink>
            </Button>{' '}
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/favorite">
                    Favorite
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/cart">
                    Cart
                </NavLink>
            </Button>
        </>
    )
}
