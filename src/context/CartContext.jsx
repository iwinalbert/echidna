import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const PRICES = {
    1: 349, 2: 799, 3: 1199, 4: 1399, 5: 499,
    6: 649, 7: 549, 8: 299, 9: 149, 10: 699,
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /**
     * addToCart(product, options)
     * options: { selectedSize, qty, uploadedImage }
     * Cart key = id + selectedSize so same product in different sizes are separate lines.
     */
    const addToCart = (product, { selectedSize = null, qty = 1, uploadedImage = null, uploadedThumbnail = null, customText = '' } = {}) => {
        const cartKey = `${product.id}::${selectedSize ?? 'default'}`;
        setCart((prev) => {
            const existing = prev.find((i) => i.cartKey === cartKey);
            if (existing) {
                return prev.map((i) =>
                    i.cartKey === cartKey ? { ...i, qty: i.qty + qty } : i
                );
            }
            return [
                ...prev,
                {
                    ...product,
                    qty,
                    selectedSize,
                    uploadedImage,
                    uploadedThumbnail,
                    customText,
                    price: PRICES[product.id] ?? 499,
                    cartKey,
                },
            ];
        });
    };

    const removeFromCart = (cartKey) => {
        setCart((prev) => prev.filter((i) => i.cartKey !== cartKey));
    };

    const updateQty = (cartKey, qty) => {
        if (qty < 1) return removeFromCart(cartKey);
        setCart((prev) =>
            prev.map((i) => (i.cartKey === cartKey ? { ...i, qty } : i))
        );
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
