import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Badge} from "@nextui-org/react";
import logo from '../svg/sanimalsLogo.png'
import { CartIcon } from "../svg/CartIcon";
import { Search } from "../svg/Search";

function NavBarSection() {
    const {
        getTotalQuantity,
    } = useContext(CartContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
        classNames={{
            toggleIcon: [
                "before:h-[2px]",
                "after:h-[2px]"
            ]
        }}
        maxWidth="xl" 
        className="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[130px]"
        onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link
                    href="/"
                    >
                        <img 
                        src={logo} 
                        alt="logo"
                        className='h-[25px]'
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem>
                    <Link 
                    href="/"
                    color="foreground"
                    className="text-xl font-medium"
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                    href="/products"
                    color="foreground"
                    className="text-xl font-medium"
                    >
                        Shop
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="flex gap-6" justify="end">
                <NavbarItem>
                    <Search className="h-8 w-auto"/>
                </NavbarItem>
                <NavbarItem>
                    <Link
                    href="/cart"
                    className="text-black"
                    >
                        <Badge color='danger' content={getTotalQuantity()} shape="rectangle">
                            <CartIcon size={30} />
                        </Badge>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="pt-20 gap-6">
                <NavbarMenuItem>
                    <Link
                    href="/products"
                    color="foreground"
                    className="w-full text-xl font-medium"
                    size="lg"
                    >
                        New In
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link 
                    href="/categories"
                    color="foreground"
                    className="w-full text-xl font-medium"
                    size="lg"
                    >
                        Categories
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export { NavBarSection };