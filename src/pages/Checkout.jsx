import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useCart } from '../context/CartContext';
import { EMAILJS_CONFIG } from '../config/emailjs';
import SEO from '../components/SEO';
import '../styles/Checkout.css';

const Checkout = () => {
    const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } = useCart();
    const [ordered, setOrdered] = useState(false);
    const [sending, setSending] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [form, setForm] = useState({ name: '', phone: '', address: '', pincode: '' });
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!form.name.trim()) errors.name = 'Name is required';
        if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s|\/|-/g, '')))
            errors.phone = 'Enter a valid 10-digit mobile number';
        if (!form.address.trim()) errors.address = 'Address is required';
        if (!/^\d{6}$/.test(form.pincode)) errors.pincode = 'Pincode must be 6 digits';
        return errors;
    };

    const shipping = cart.length === 0 ? 0 : (totalPrice > 999 ? 0 : 99);
    const grandTotal = totalPrice + shipping;

    const handleOrder = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
        setFormErrors({});
        setSending(true);
        setEmailError(null);

        // Build order items summary string
        const orderItemsText = cart
            .map((item) => {
                const size = item.selectedSize ? ` (${item.selectedSize})` : '';
                const design = item.uploadedImage ? ' 🎨 custom artwork' : '';
                const note = item.customText ? ` — "${item.customText}"` : '';
                return `• ${item.name}${size}${design}${note} × ${item.qty} = ₹${item.price * item.qty}`;
            })
            .join('\n');

        // Build embedded HTML for uploaded designs (base64 thumbnails)
        const imageHtml = cart
            .filter((item) => item.uploadedThumbnail)
            .map((item) =>
                `<div style="margin-bottom:12px;">
                    <p style="font-size:12px;color:#888;margin:0 0 4px;">${item.name}${item.selectedSize ? ` · ${item.selectedSize}` : ''}</p>
                    <img src="${item.uploadedThumbnail}" alt="${item.name}" style="max-width:320px;border-radius:8px;display:block;" />
                </div>`
            )
            .join('') || '<p style="color:#888;font-size:12px;">No custom artwork uploaded.</p>';

        const templateParams = {
            customer_name: form.name,
            customer_phone: form.phone,
            customer_address: form.address,
            customer_pincode: form.pincode,
            order_items: orderItemsText,
            subtotal: totalPrice,
            shipping: shipping === 0 ? '0 (Free)' : shipping,
            grand_total: grandTotal,
            placed_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            image_html: imageHtml,
        };

        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );
        } catch (err) {
            console.error('EmailJS error:', err);
            setEmailError('Order placed, but email notification failed. Please note the order manually.');
        }

        clearCart();
        setSending(false);
        setOrdered(true);
    };

    if (ordered) {
        return (
            <div className="checkout-page">
                <SEO title="Order Success" />
                <div className="ch-success">
                    <div className="ch-success-icon">🎉</div>
                    <h2>Order Placed!</h2>
                    <p>
                        Thanks, <strong>{form.name || 'friend'}</strong>! Your order has been received.<br />
                        We'll get your sublimation prints ready and ship them out shortly.
                    </p>
                    {emailError && (
                        <p style={{ fontSize: 13, color: '#f87171', maxWidth: 400, marginTop: -12 }}>
                            ⚠ {emailError}
                        </p>
                    )}
                    <Link to="/products" className="ch-continue">Continue Shopping →</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <SEO title="Checkout" description="Review your cart and place your custom sublimation order seamlessly." />

            <div className="page-hero" style={{ paddingTop: '100px', paddingBottom: '30px', textAlign: 'center' }}>
                <h1 className="header-title" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--text-main)', margin: '0' }}>Checkout</h1>
                <p className="header-sub" style={{ fontSize: '14px', color: 'var(--text-sec)', marginTop: '8px' }}>
                    {totalItems > 0 ? `${totalItems} item${totalItems > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
                </p>
            </div>

            <div className="ch-body">
                {/* Left — Cart items */}
                <div className="ch-panel">
                    <p className="ch-panel-title">Your Cart</p>

                    {cart.length === 0 ? (
                        <div className="ch-empty">
                            <div className="ch-empty-icon">🛒</div>
                            <p>Your cart is empty.</p>
                            <Link to="/products" className="ch-shop-btn">Browse Products →</Link>
                        </div>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div key={item.cartKey} className="ch-item">
                                    <div className="ch-item-art-wrap">
                                        <div className="ch-item-art"
                                            dangerouslySetInnerHTML={{ __html: item.art }}
                                        />
                                        {item.uploadedImage && (
                                            <div className="ch-item-design-overlay">
                                                <img src={item.uploadedImage} alt="Your design" className="ch-item-design-img" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="ch-item-info">
                                        <p className="ch-item-name">{item.name}</p>
                                        <p className="ch-item-price">
                                            ₹{item.price} each
                                            {item.selectedSize && (
                                                <span className="ch-item-size"> · {item.selectedSize}</span>
                                            )}
                                        </p>
                                        {item.uploadedImage && (
                                            <p className="ch-item-custom-tag">🎨 Custom artwork attached</p>
                                        )}
                                        {item.customText && (
                                            <p className="ch-item-custom-tag">✏️ "{item.customText}"</p>
                                        )}
                                    </div>

                                    <div className="ch-item-controls">
                                        <button className="ch-qty-btn" onClick={() => updateQty(item.cartKey, item.qty - 1)}>−</button>
                                        <span className="ch-qty">{item.qty}</span>
                                        <button className="ch-qty-btn" onClick={() => updateQty(item.cartKey, item.qty + 1)}>+</button>
                                    </div>

                                    <span className="ch-item-subtotal">₹{item.price * item.qty}</span>
                                    <button className="ch-remove" onClick={() => removeFromCart(item.cartKey)} title="Remove">✕</button>
                                </div>
                            ))}

                            {/* Uploaded designs gallery */}
                            {cart.some((i) => i.uploadedImage) && (
                                <div className="ch-designs-gallery">
                                    <p className="ch-designs-title">Your Custom Designs</p>
                                    <div className="ch-designs-grid">
                                        {cart.filter((i) => i.uploadedImage).map((item) => (
                                            <div key={item.cartKey} className="ch-design-card">
                                                <img src={item.uploadedImage} alt={item.name} className="ch-design-img" />
                                                <p className="ch-design-label">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div style={{ marginTop: '20px' }}>
                                <div className="ch-summary-row"><span>Subtotal</span><span>₹{totalPrice}</span></div>
                                <div className="ch-summary-row">
                                    <span>Shipping</span>
                                    <span>{shipping === 0
                                        ? <span style={{ color: '#34D399' }}>Free</span>
                                        : `₹${shipping}`}
                                    </span>
                                </div>
                                {shipping > 0 && (
                                    <div className="ch-summary-row" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                                        <span>Free shipping on orders above ₹999</span>
                                    </div>
                                )}
                                <div className="ch-summary-total"><span>Total</span><span>₹{grandTotal}</span></div>
                            </div>
                        </>
                    )}
                </div>

                {/* Right — Delivery form */}
                <div className="ch-panel">
                    <p className="ch-panel-title">Delivery Details</p>
                    <form className="ch-form" onSubmit={handleOrder}>
                        <div className="ch-field">
                            <label className="ch-label">Full Name</label>
                            <input className="ch-input" placeholder="Iwin Albert" required
                                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            {formErrors.name && <p className="ch-field-error">{formErrors.name}</p>}
                        </div>
                        <div className="ch-field">
                            <label className="ch-label">Phone Number</label>
                            <input className="ch-input" placeholder="98765 43210" required type="tel"
                                maxLength={10} inputMode="numeric"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} />
                            {formErrors.phone && <p className="ch-field-error">{formErrors.phone}</p>}
                        </div>
                        <div className="ch-field">
                            <label className="ch-label">Delivery Address</label>
                            <input className="ch-input" placeholder="Street, City, State" required
                                value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                            {formErrors.address && <p className="ch-field-error">{formErrors.address}</p>}
                        </div>
                        <div className="ch-field">
                            <label className="ch-label">Pincode</label>
                            <input className="ch-input" placeholder="600001" required maxLength={6} inputMode="numeric"
                                value={form.pincode}
                                onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) })} />
                            {formErrors.pincode && <p className="ch-field-error">{formErrors.pincode}</p>}
                        </div>
                        <button className="ch-place-btn" type="submit" disabled={cart.length === 0 || sending}>
                            {sending ? '⏳ Sending…' : `Place Order · ₹${grandTotal}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
