import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../context/CartContext';
import '../styles/Modal.css';

const PRICES = {
    1: 349, 2: 799, 3: 1199, 4: 1399, 5: 499,
    6: 649, 7: 549, 8: 299, 9: 149, 10: 699,
};

const QuickAddModal = ({ product, onClose, onAdded }) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [qty, setQty] = useState(1);
    const [sizeError, setSizeError] = useState(false);

    const sizesSpec = product.specs.find((s) => s.isChips);
    const sizes = sizesSpec ? (Array.isArray(sizesSpec.value) ? sizesSpec.value : [sizesSpec.value]) : null;
    const price = PRICES[product.id] || 499;

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const handleAdd = () => {
        if (sizes && !selectedSize) {
            setSizeError(true);
            setTimeout(() => setSizeError(false), 1200);
            return;
        }
        addToCart(product, { selectedSize, qty });
        if (onAdded) onAdded();
        onClose();
    };

    const modalContent = (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                {/* Product preview */}
                <div className="modal-top">
                    <div className="modal-art"
                        dangerouslySetInnerHTML={{ __html: product.art }}
                    />
                    <div className="modal-meta">
                        <p className="modal-product-tag">{product.tag}</p>
                        <p className="modal-product-name">{product.name}</p>
                        <p className="modal-product-price">₹{price} · {sizesSpec?.label || 'per item'}</p>
                    </div>
                </div>

                {/* Size picker */}
                {sizes && (
                    <div>
                        <p className="modal-section-label">{sizesSpec.label}</p>
                        <div className="modal-sizes">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    className={`modal-size-btn${selectedSize === s ? ' selected' : ''}`}
                                    onClick={() => { setSelectedSize(s); setSizeError(false); }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        {sizeError && <p className="modal-size-hint">⚠ Please pick a {sizesSpec.label.toLowerCase()} first</p>}
                    </div>
                )}

                {/* Qty */}
                <div>
                    <p className="modal-section-label">Quantity</p>
                    <div className="modal-qty-row">
                        <button className="modal-qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}>−</button>
                        <span className="modal-qty-val">{qty}</span>
                        <button className="modal-qty-btn" onClick={() => setQty((q) => Math.min(99, q + 1))}>+</button>
                        <span style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, marginLeft: 6 }}>
                            = ₹{price * qty}
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <button className="modal-add-btn" onClick={handleAdd}>
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default QuickAddModal;
