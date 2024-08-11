import React, { useContext } from 'react'
import { Badge } from '@nextui-org/react'
import { CartIcon } from '../svg/CartIcon'
import { Search } from '../svg/Search'
import { CartContext } from '../context/CartProvider'

function SearchCart() {
    const {
        getTotalQuantity,
    } = useContext(CartContext)
    return (
        <div className='header__searchCart'>
            <Search size={33} height={33} width={33} className='header__searchCart-img' />
            <Badge color='danger' content={getTotalQuantity()} shape='rectangle'>
                <CartIcon size={30}/>
            </Badge>
        </div>
    )
}

export { SearchCart }