import React, { useContext } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link } from "@nextui-org/react";
import { CartContext } from "../context/CartProvider";
import { BagIcon } from "../svg/BagIcon";

function CartModal({ product }) {
    const { 
        cartItems,
        addToCart,
        deleteItem,
     } = useContext(CartContext);

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

    // Get the last item added to the cart
    const lastItem = cartItems[cartItems.length - 1];
    // const price = (lastItem.price / 100).toFixed(2);

    const handleCartModal = () => {
        addToCart(product);
        onOpen();
    } 

    const handleRemoveItem = (item) => {
        deleteItem(item);
        onClose();
    }

    return (
        <>
        <Button
        onClick={() => {handleCartModal(product)}}
        className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-6 text-center text-base font-bold text-white">
                <BagIcon />
                Add to Cart
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">SUCCESSFULLY ADDED TO BAG!</ModalHeader>
                <ModalBody>
                    <div className="flex flex-row whitespace-nowrap text-left">
                        <div className="h-36 shrink-0">
                            <img src={lastItem.image} alt="product" className="w-full h-full object-contain" />
                        </div>
                        <div className="ml-2">
                            <p className="text-sm md:text-base font-semibold text-[#333] whitespace-normal">{lastItem.title}</p>
                            <p className="text-sm font-normal text-[#333]">${(lastItem.price / 100).toFixed(2)}</p>
                            <p className="text-sm font-normal text-[#333]">Size: {lastItem.size}</p>
                            <Link 
                            href="#"
                            color="danger"
                            className="mt-4 font-semibold text-sm"
                            onPress={() => {
                                handleRemoveItem(lastItem)
                            }}
                            >
                                Remove
                            </Link>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="flex flex-col w-full">
                        <Button
                        as={Link}
                        href="/cart"
                        radius="md"
                        className="mt-2 flex items-center justify-center bg-slate-900 py-6 text-center text-sm font-medium text-white mb-4"
                        >
                            <BagIcon />
                            View Bag
                        </Button>
                        <Button
                        onClick={onClose}
                        radius="md border-slate-900 text-slate-900"
                        color="primary"
                        variant="bordered"
                        className="py-6"
                        >
                        Continue Shopping
                        </Button>

                    </div>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
    )
}

export { CartModal }