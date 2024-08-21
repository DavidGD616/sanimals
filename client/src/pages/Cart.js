import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { PageWidth } from '../components/PageWidth';
import { Button, Divider, Link } from "@nextui-org/react";
import { Reducer } from "../svg/Reducer";
import { Increaser } from "../svg/Increaser";
import { EmptyCart } from "../svg/EmptyCart";


function Cart() {
    const { 
        cartItems,
        removeFromCart,
        addToCart,
        getCartTotal,
        deleteItem,
     } = useContext(CartContext);

     console.log("cartItems", cartItems)
     console.log("strigifyCart", JSON.stringify(cartItems))

    return (
      <>
        <PageWidth>
          <section>
            <div className="mt-10 mb-6">
              <h1 className="text-3xl md:text-4xl font-medium">Your Cart</h1>
            </div>
            <div>
              <table className="mt-6 w-full border-collapse divide-y">
                <thead className="whitespace-nowrap text-left">
                  <tr>
                    <th className="text-sm text-[#656F7E] p-4">PRODUCT</th>
                    <th className="text-sm text-[#656F7E] p-4">QUANTITY</th>
                    <th className="hidden md:block text-sm text-[#656F7E] p-4">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                {cartItems.map((item) => (
                  <tbody key={item.id} className="whitespace-nowrap divide-y">
                    <tr>
                      <td className="py-6 px-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                          <div className="h-36 shrink-0">
                            <img
                              src={item.image}
                              alt="product"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-sm md:text-base font-semibold text-[#333] whitespace-normal">
                              {item.title}
                            </p>
                            <p className="text-sm font-normal text-[#333]">
                              Size: {item.size}
                            </p>
                            <p className="text-sm font-normal text-[#333]">
                              Color: {item.color}
                            </p>
                            <p className="text-sm font-normal text-[#333]">
                              Price: ${(item.price / 100).toFixed(2)}
                            </p>
                            <Link
                              href="#"
                              color="danger"
                              className="mt-4 font-semibold text-sm"
                              onPress={() => {
                                deleteItem(item);
                              }}
                            >
                              Remove
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <div className="flex divide-x border w-max">
                          <Button
                            isIconOnly
                            radius="none"
                            className="bg-gray-100 px-4 py-2 font-semibold"
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            <Reducer className="p-0" width={12} />
                          </Button>
                          <input
                            type="number"
                            value={item.quantity}
                            className="bg-transparent px-2 font-semibold text-[#333] text-md w-10"
                          />
                          <Button
                            isIconOnly
                            radius="none"
                            className="bg-gray-800 text-white px-4 py-2 font-semibold"
                            onClick={() => {
                              addToCart(item);
                              console.log(addToCart(item));
                            }}
                          >
                            <Increaser size={12} />
                          </Button>
                        </div>
                      </td>
                      <td className="hidden md:block py-6 px-4">
                        <h4 className="text-md font-bold text-[#333]">
                          ${((item.price * item.quantity) / 100).toFixed(2)}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <Divider className=" my-6" />

              {cartItems.length > 0 ? (
                <>
                  <div
                    className="flex justify-between lg:justify-end lg:items-end
                                    lg:flex-col-reverse items-center py-6 px-4"
                  >
                    <div className="flex flex-col lg:justify-end lg:items-end">
                      <label className="text-lg text-[#333]">SUBTOTAL</label>
                      <label className="text-xs md:text-base text-[#656F7E]">
                        Taxes and shipping calculated at checkout
                      </label>
                    </div>
                    <h4 className="text-lg font-bold text-[#333]">
                      ${(getCartTotal() / 100).toFixed(2)}
                    </h4>
                  </div>
                  <div className="w-full md:flex md:justify-end mt-2 mb-16 py-2 px-4">
                    <Button
                      href="/checkout"
                      as={Link}
                      radius="sm"
                      className="w-full h-16 md:w-5/12 lg:w-72 bg-black text-base text-white font-bold tracking-widest"
                    >
                      Check-Out
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center my-8">
                  <div className="pb-8">
                    <EmptyCart size={80} />
                  </div>
                  <h3 className="text-xl font-bold py-4">Your Cart is Empty</h3>
                  <h4 className="text-lg font-medium pb-4">
                    Add something to make me happy :)
                  </h4>
                  <Button href="/" radius="sm" color="primary">
                    Continue Shopping
                  </Button>
                </div>
              )}
            </div>
          </section>
        </PageWidth>
      </>
    );
}

export { Cart }

