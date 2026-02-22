import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuickAddModal from './QuickAddModal';

const ProductCard = ({ product, style }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);

    const handleModalClose = (added) => {
        setModalOpen(false);
        if (added !== false) {
            // toast fires after modal closes
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 2500);
        }
    };

    return (
        <>
            <article className="product-card" style={style}>
                <div className="product-art">
                    <div
                        dangerouslySetInnerHTML={{ __html: product.art }}
                        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    />
                </div>
                <div className="product-info">
                    <div className="product-tag">{product.tag}</div>
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-desc">{product.description}</p>
                    <div className="spec-divider"></div>
                    <div className="product-specs">
                        {product.specs.map((spec, index) => (
                            <div key={index} className="spec-row">
                                <span className="spec-label">{spec.label}</span>
                                <span className="spec-value">
                                    {spec.isChips ? (
                                        <div className="size-chips">
                                            {Array.isArray(spec.value) ? spec.value.map((chip, i) => (
                                                <span key={i} className="size-chip">{chip}</span>
                                            )) : spec.value}
                                        </div>
                                    ) : spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="feature-badges" style={{ marginTop: '8px' }}>
                        {product.badges.map((badge, index) => (
                            <span key={index} className={`feature-badge ${badge.color === 'default' ? '' : badge.color}`}>
                                {badge.text}
                            </span>
                        ))}
                    </div>
                    <div className="product-footer" style={{ marginTop: '12px' }}>
                        <div className="product-actions">
                            <Link to={`/customize/${product.id}`} className="customize-btn">
                                Customize ↗
                            </Link>
                            <button className="add-to-cart-btn" onClick={() => setModalOpen(true)}>
                                🛒 Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`card-toast${toastVisible ? ' show' : ''}`}>
                    ✅ Added to cart!
                </div>
            </article>

            {modalOpen && (
                <QuickAddModal
                    product={product}
                    onClose={() => handleModalClose(false)}
                    onAdded={() => handleModalClose(true)}
                />
            )}
        </>
    );
};

export default ProductCard;
